@echo off
cls
echo ==========================================
echo    AGAPE GitHub Upload Tool
echo ==========================================
echo.

echo [1/5] Adding all files to git...
git add -A

echo [2/5] Committing changes...
git commit -m "Update: Complete AGAPE healthcare website" --allow-empty

echo [3/5] Checking remote repository...
git remote -v

echo [4/5] Pulling latest changes...
git pull origin master --allow-unrelated-histories --no-edit

echo [5/5] Pushing to GitHub...
git push origin master

echo.
echo ==========================================
echo    SUCCESS! Project uploaded to GitHub
echo    Visit: https://github.com/NeoNemesis/MindCareClinic
echo ==========================================
echo.
pause 