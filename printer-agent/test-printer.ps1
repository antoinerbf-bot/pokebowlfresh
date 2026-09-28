$config=Get-Content -Raw "$PSScriptRoot\config.json"|ConvertFrom-Json
$head=[byte[]](0x1B,0x40,0x1B,0x74,0x02,0x1B,0x61,0x01,0x1B,0x45,0x01)
$text=[Text.Encoding]::GetEncoding(850).GetBytes(("POKE N BOWL"+[char]10+"TEST IMPRIMANTE"+[char]10+[char]10))
$tail=[byte[]](0x1B,0x45,0x00,0x1B,0x61,0x00,0x1B,0x64,0x05,0x1D,0x56,0x01)
$payload=$head+$text+$tail
$client=New-Object Net.Sockets.TcpClient
try { $client.ConnectAsync([string]$config.printerIp,[int]$config.printerPort).Wait(5000)|Out-Null; $stream=$client.GetStream();$stream.Write($payload,0,$payload.Length);$stream.Flush();Write-Host "TEST ENVOYE A L'IMPRIMANTE." } finally { $client.Close() }
