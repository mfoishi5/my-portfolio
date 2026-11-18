@echo off
title Deploy Myesha Portfolio to GitHub
color 0A
echo ========================================================
echo    Myesha Farjana Oishi - Portfolio GitHub Uploader
echo ========================================================
echo.

set PATH=%PATH%;C:\Users\HP\MinGit\cmd

git status >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [1/3] Initializing Git repository...
    git init
    git branch -M main
)

echo [2/3] Adding files and creating commit...
git add .
git commit -m "Update: Myesha Farjana Oishi UI/UX Portfolio"

echo.
echo ========================================================
echo Enter your GitHub Repository URL:
echo (Example: https://github.com/your-username/myesha-portfolio.git)
echo ========================================================
set /p REPO_URL="Repository URL: "

if "%REPO_URL%"=="" (
    echo Error: No repository URL provided!
    pause
    exit /b
)

git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%

echo.
echo [3/3] Pushing to GitHub (main branch)...
git push -u origin main

echo.
echo ========================================================
echo GitHub Upload Complete!
echo You can now deploy to Vercel at: https://vercel.com
echo ========================================================
pause
