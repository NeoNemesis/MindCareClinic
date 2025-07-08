@echo off
echo Uploading AGAPE project to GitHub...
git add .
git commit -m "AGAPE healthcare website update"
git push origin master --force
echo.
echo Done! Check: https://github.com/NeoNemesis/MindCareClinic
pause 