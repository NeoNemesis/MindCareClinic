@echo off
echo Uploading AGAPE project to GitHub...
echo.

echo Step 1: Pulling remote changes...
git pull origin master --allow-unrelated-histories

echo.
echo Step 2: Pushing to GitHub...
git push origin master

echo.
echo Upload completed!
echo Your AGAPE website is now available at: https://github.com/NeoNemesis/MindCareClinic
pause 