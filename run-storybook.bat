@echo off
setlocal

title Storybook Dev Launcher

echo =========================================
echo   Storybook Developer Launcher
echo =========================================
echo.

cd /d %~dp0

REM ---------- Pre-flight ----------
where node >nul 2>&1 || (
  echo Node.js not found. Install Node.js first.
  pause
  exit /b 1
)

where npm >nul 2>&1 || (
  echo npm not found.
  pause
  exit /b 1
)

netstat -ano | find ":6006" >nul && (
  echo Port 6006 is already in use.
  echo Close the existing Storybook or free the port.
  pause
  exit /b 1
)

REM ---------- Git ----------
echo [1/3] Updating source...
git pull
if errorlevel 1 (
  echo Git pull failed. Using local version.
) else (
  echo Git pull successful.
)
echo.

REM ---------- npm install ----------
echo [2/3] Installing dependencies...
call npm install
if errorlevel 1 (
  echo npm install reported issues.
  echo This may be warnings. Continuing anyway.
) else (
  echo Dependencies installed successfully.
)
echo.

REM ---------- Storybook ----------
echo [3/3] Starting Storybook...
echo -----------------------------------------
echo Storybook URL: http://localhost:6006
echo Close this window to STOP Storybook
echo -----------------------------------------
echo.

call npm run storybook
if errorlevel 1 (
  echo Storybook failed to start.
  echo Check package.json scripts.
  pause
  exit /b 1
)

REM ---------- Exit ----------
echo.
echo =========================================
echo Storybook stopped.
echo =========================================
pause
