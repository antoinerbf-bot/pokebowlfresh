@echo off
setlocal
title Poke N Bowl - Installation imprimante
echo.
echo POKE N BOWL - INSTALLATION IMPRIMANTE
echo.
set /p SITE_URL="1/3 - Adresse du site Vercel : "
set /p PRINTER_IP="2/3 - IP de l'imprimante MUNBYN : "
set /p SECRET="3/3 - Code secret imprimeur : "
if "%SITE_URL%"=="" goto :error
if "%PRINTER_IP%"=="" goto :error
if "%SECRET%"=="" goto :error
powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "$cfg=@{siteUrl='%SITE_URL%';printerIp='%PRINTER_IP%';printerPort=9100;secret='%SECRET%'}|ConvertTo-Json;Set-Content -Path '%~dp0config.json' -Value $cfg -Encoding UTF8"
if errorlevel 1 goto :error
powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "$ws=New-Object -ComObject WScript.Shell;$startup=[Environment]::GetFolderPath('Startup');$lnk=$ws.CreateShortcut((Join-Path $startup 'Poke N Bowl Printer.lnk'));$lnk.TargetPath='powershell.exe';$lnk.Arguments='-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File ""%~dp0printer-agent.ps1""';$lnk.WorkingDirectory='%~dp0';$lnk.Save()"
echo.
echo Installation terminee. L'agent demarrera a la prochaine ouverture de session.
start "" powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0printer-agent.ps1"
exit /b 0
:error
echo Une information manque. Relance install.bat.
pause
exit /b 1
