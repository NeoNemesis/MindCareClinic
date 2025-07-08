Write-Host "🚀 AGAPE GitHub Upload Tool" -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Green
Write-Host ""

try {
    Write-Host "📁 Adding files..." -ForegroundColor Yellow
    git add -A
    
    Write-Host "💾 Committing..." -ForegroundColor Yellow
    git commit -m "Update: AGAPE healthcare website $(Get-Date -Format 'yyyy-MM-dd HH:mm')" --allow-empty
    
    Write-Host "🔄 Pushing to GitHub..." -ForegroundColor Yellow
    git push origin master --force
    
    Write-Host ""
    Write-Host "✅ SUCCESS! Project uploaded to GitHub" -ForegroundColor Green
    Write-Host "🌐 Visit: https://github.com/NeoNemesis/MindCareClinic" -ForegroundColor Cyan
    Write-Host ""
}
catch {
    Write-Host "❌ Error: $($_.Exception.Message)" -ForegroundColor Red
}

Read-Host "Press Enter to continue" 