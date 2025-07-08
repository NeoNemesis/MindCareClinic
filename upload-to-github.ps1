Write-Host "Uploading AGAPE project to GitHub..." -ForegroundColor Green
Write-Host ""

Write-Host "Step 1: Pulling remote changes..." -ForegroundColor Yellow
git pull origin master --allow-unrelated-histories

Write-Host ""
Write-Host "Step 2: Pushing to GitHub..." -ForegroundColor Yellow
git push origin master

Write-Host ""
Write-Host "Upload completed!" -ForegroundColor Green
Write-Host "Your AGAPE website is now available at: https://github.com/NeoNemesis/MindCareClinic" -ForegroundColor Cyan
Read-Host "Press Enter to continue" 