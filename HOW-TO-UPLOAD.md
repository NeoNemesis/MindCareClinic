# 🚀 Enkel Guide för GitHub Upload

## Snabbaste Metoden (Rekommenderat)

### Alternativ 1: Dubbelklicka på filen
```
quick-upload.bat
```

### Alternativ 2: Högerklicka i mappen → "Öppna PowerShell här"
```powershell
.\upload-simple.ps1
```

### Alternativ 3: Kommandotolken
```cmd
github-upload.cmd
```

## Om du får fel

### Fel 1: "ExecutionPolicy"
Kör detta först:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Fel 2: "Authentication failed"
Använd GitHub Desktop eller konfigurera dina inloggningsuppgifter

### Fel 3: "Permission denied"
Högerklicka på mappen → "Egenskaper" → Ta bort "Skrivskyddad"

## Verifiering

Efter uppladdning, gå till:
**https://github.com/NeoNemesis/MindCareClinic**

Du bör se alla dina filer där!

## Tips

- Använd `quick-upload.bat` för snabbast resultat
- Använd `github-upload.cmd` för mer detaljerad feedback
- Använd `upload-simple.ps1` för PowerShell-användare

## Hjälp

Om inget fungerar, skicka en skärmdump av felet så kan jag hjälpa dig! 