@echo off
title Push Portfolio to https://github.com/mfoishi5/Portfolio
color 0A

echo ====================================================================
echo     Myesha Farjana Oishi - Portfolio GitHub Auto Uploader
echo     Target: https://github.com/mfoishi5/Portfolio
echo ====================================================================
echo.

set PATH=%PATH%;C:\Users\HP\MinGit\cmd

echo [1/3] Checking Git status...
git config user.name "mfoishi5"
git config user.email "mfoishi5@gmail.com"

git remote remove origin >nul 2>&1
git remote add origin https://github.com/mfoishi5/Portfolio.git

echo [2/3] Adding and committing files...
git add .
git commit -m "feat: complete UI/UX portfolio for Myesha Farjana Oishi" >nul 2>&1

echo.
echo [3/3] Pushing to GitHub (Branch: main)...
echo If a GitHub Sign-in window appears, please authorize/log in.
echo.

git push -u origin main

echo.
if %ERRORLEVEL% EQU 0 (
    echo ====================================================================
    echo   SUCCESS! Files uploaded to:
    echo   https://github.com/mfoishi5/Portfolio
    echo.
    echo   Now enable GitHub Pages:
    echo   1. Open: https://github.com/mfoishi5/Portfolio/settings/pages
    echo   2. Under 'Source', select 'Deploy from a branch'
    echo   3. Select Branch: 'main' and Folder: '/ (root)'
    echo   4. Click 'Save'
    echo.
    echo   Your Live Website will be:
    echo   https://mfoishi5.github.io/Portfolio/
    echo ====================================================================
) else (
    echo ====================================================================
    echo   NOTICE:
    echo   If you haven't created the 'Portfolio' repository on GitHub yet:
    echo   1. Go to: https://github.com/new
    echo   2. Repository name: Portfolio
    echo   3. Select 'Public' and click 'Create repository'
    echo   4. Run this script again!
    echo ====================================================================
)

echo.
pause
