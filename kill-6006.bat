@echo off
setlocal enabledelayedexpansion

set PORT=6006
set PID=

for /f "tokens=5" %%a in ('netstat -ano ^| findstr /R /C:":%PORT% .*LISTENING"') do (
  set PID=%%a
  goto :found
)

:found
if not defined PID (
  echo No LISTENING process found on port %PORT%.
  exit /b 0
)

echo Killing PID %PID% on port %PORT%...
taskkill /PID %PID% /F >nul 2>&1

if %errorlevel%==0 (
  echo Killed.
) else (
  echo Failed to kill PID %PID% (try running this .bat as Administrator).
)

endlocal
