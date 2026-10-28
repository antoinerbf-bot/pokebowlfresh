param([string]$ConfigPath = "$PSScriptRoot\config.json")
$ErrorActionPreference="Stop"
function Read-Config { if (-not (Test-Path $ConfigPath)) { throw "config.json introuvable. Lance install.bat une fois." }; Get-Content -Raw $ConfigPath | ConvertFrom-Json }
function Add-Bytes { param($Stream,[byte[]]$Bytes); $Stream.Write($Bytes,0,$Bytes.Length) }
function Add-Text { param($Stream,[string]$Text,$Encoding); Add-Bytes $Stream $Encoding.GetBytes($Text) }
function Add-Line { param($Stream,[string]$Text,$Encoding); Add-Text $Stream ($Text + [char]10) $Encoding }
function Fit-Line { param([string]$Text,[int]$Width=42); if ($Text.Length -le $Width) { return $Text }; $Text.Substring(0,$Width-3)+"..." }
function Build-ReceiptBytes {
  param($Order)
  $encoding=[Text.Encoding]::GetEncoding(850); $stream=New-Object IO.MemoryStream
  Add-Bytes $stream ([byte[]](0x1B,0x40)); Add-Bytes $stream ([byte[]](0x1B,0x74,0x02))
  Add-Bytes $stream ([byte[]](0x1B,0x61,0x01)); Add-Bytes $stream ([byte[]](0x1B,0x45,0x01))
  Add-Line $stream "POKE N BOWL VISE" $encoding; Add-Bytes $stream ([byte[]](0x1B,0x45,0x00))
  Add-Line $stream "COMMANDE CUISINE" $encoding; Add-Line $stream "" $encoding
  Add-Bytes $stream ([byte[]](0x1B,0x61,0x00))
  Add-Line $stream ("N° "+$Order.id) $encoding
  Add-Line $stream ("Heure : "+(Get-Date).ToString("dd/MM/yyyy HH:mm")) $encoding
  Add-Line $stream ("Client : "+$Order.customer.name) $encoding
  Add-Line $stream ("Tel : "+$Order.customer.phone) $encoding
  if ($Order.customer.fulfillment -eq "delivery") {
    Add-Line $stream "LIVRAISON" $encoding
    Add-Line $stream ("Adresse : "+$Order.customer.address) $encoding
    Add-Line $stream (($Order.customer.postalCode+" "+$Order.customer.city).Trim()) $encoding
    Add-Line $stream ("Créneau : "+$Order.customer.requestedTime) $encoding
    Add-Line $stream ("Livraison : "+([decimal]$Order.customer.deliveryFee).ToString("0.00")+" EUR") $encoding
  } else {
    Add-Line $stream ("RETRAIT : "+$Order.customer.requestedTime) $encoding
  }
  if ($Order.customer.notes) { Add-Line $stream ("Note : "+$Order.customer.notes) $encoding }
  Add-Line $stream ("-"*42) $encoding
  foreach ($item in $Order.items) {
    Add-Bytes $stream ([byte[]](0x1B,0x45,0x01))
    Add-Line $stream ("{0} x {1}" -f [int]$item.quantity,(Fit-Line ([string]$item.name))) $encoding
    Add-Bytes $stream ([byte[]](0x1B,0x45,0x00))
    if ($item.toppings) { foreach ($topping in $item.toppings) { Add-Line $stream ("  + "+(Fit-Line ([string]$topping) 38)) $encoding } }
  }
  Add-Line $stream ("-"*42) $encoding; Add-Bytes $stream ([byte[]](0x1B,0x45,0x01))
  Add-Line $stream ("TOTAL : "+([decimal]$Order.total).ToString("0.00")+" EUR") $encoding
  Add-Bytes $stream ([byte[]](0x1B,0x45,0x00)); Add-Line $stream "" $encoding; Add-Line $stream "Merci !" $encoding; Add-Line $stream "" $encoding
  Add-Bytes $stream ([byte[]](0x1B,0x64,0x05)); Add-Bytes $stream ([byte[]](0x1D,0x56,0x01))
  $bytes=$stream.ToArray(); $stream.Dispose(); $bytes
}
function Send-ToPrinter {
  param([string]$Ip,[int]$Port,[byte[]]$Bytes)
  $client=New-Object Net.Sockets.TcpClient
  try { $connect=$client.ConnectAsync($Ip,$Port); if (-not $connect.Wait(5000)) { throw "Connexion imprimante expirée." }; $stream=$client.GetStream(); $stream.Write($Bytes,0,$Bytes.Length); $stream.Flush(); Start-Sleep -Milliseconds 250 } finally { $client.Close() }
}
function Get-QueueJob {
  param($Config)
  $headers=@{"x-printer-secret"=[string]$Config.secret}
  $uri=([string]$Config.siteUrl).TrimEnd("/")+"/api/printer/queue"
  Invoke-RestMethod -Method Get -Uri $uri -Headers $headers -TimeoutSec 15
}
function Ack-Job {
  param($Config,[string]$OrderId,[bool]$Success,[string]$ErrorMessage)
  $headers=@{"x-printer-secret"=[string]$Config.secret;"content-type"="application/json"}; $body=@{orderId=$OrderId;success=$Success}
  if ($ErrorMessage) { $body.error=$ErrorMessage }
  $uri=([string]$Config.siteUrl).TrimEnd("/")+"/api/printer/ack"
  Invoke-RestMethod -Method Post -Uri $uri -Headers $headers -Body ($body|ConvertTo-Json -Compress) -TimeoutSec 15 | Out-Null
}
$config=Read-Config; $logPath=Join-Path $PSScriptRoot "printer-agent.log"
while ($true) {
  try {
    $job=(Get-QueueJob $config).job
    if ($null -eq $job) { Start-Sleep 3; continue }
    try {
      Send-ToPrinter -Ip ([string]$config.printerIp) -Port ([int]$config.printerPort) -Bytes (Build-ReceiptBytes $job)
      Ack-Job $config ([string]$job.id) $true ""
      Add-Content $logPath ("{0} PRINTED {1}" -f (Get-Date -Format s),$job.id)
    } catch {
      $message=$_.Exception.Message; Add-Content $logPath ("{0} FAILED {1}: {2}" -f (Get-Date -Format s),$job.id,$message)
      try { Ack-Job $config ([string]$job.id) $false $message } catch {}
      Start-Sleep 10
    }
  } catch {
    Add-Content $logPath ("{0} ERROR: {1}" -f (Get-Date -Format s),$_.Exception.Message); Start-Sleep 10
  }
}
