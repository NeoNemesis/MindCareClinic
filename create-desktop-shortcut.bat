@echo off
echo Creating desktop shortcut for AGAPE GitHub Upload...

set "shortcut_path=%USERPROFILE%\Desktop\Upload AGAPE to GitHub.lnk"
set "target_path=%CD%\quick-upload.bat"

powershell -Command "$ws = New-Object -ComObject WScript.Shell; $s = $ws.CreateShortcut('%shortcut_path%'); $s.TargetPath = '%target_path%'; $s.WorkingDirectory = '%CD%'; $s.IconLocation = 'shell32.dll,13'; $s.Save()"

echo Desktop shortcut created!
echo You can now double-click "Upload AGAPE to GitHub" on your desktop
pause 