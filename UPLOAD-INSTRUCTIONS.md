# Instruções para Upload no GitHub

## Método 1: Usando Scripts (Recomendado)

### Windows (PowerShell)
```powershell
.\upload-to-github.ps1
```

### Windows (Command Prompt)
```cmd
upload-to-github.bat
```

### Linux/Mac (Git Bash)
```bash
chmod +x upload-to-github.sh
./upload-to-github.sh
```

## Método 2: Comandos Manuais

Se os scripts não funcionarem, execute estes comandos manualmente:

```bash
# 1. Puxar mudanças remotas
git pull origin master --allow-unrelated-histories

# 2. Resolver conflitos se houver (normalmente apenas aceite)
# Se aparecer uma tela de merge, pressione Ctrl+X para sair

# 3. Fazer push para o GitHub
git push origin master
```

## Método 3: Force Push (Alternativo)

Se você quiser substituir completamente o repositório remoto:

```bash
git push origin master --force
```

⚠️ **Cuidado:** Este método sobrescreve todo o conteúdo remoto

## Verificação

Após o upload, verifique se deu certo visitando:
https://github.com/NeoNemesis/MindCareClinic

## Solução de Problemas

### Erro de Autenticação
- Configure suas credenciais do GitHub
- Use token pessoal em vez de senha

### Erro de Unrelated Histories
- Use a flag `--allow-unrelated-histories` no pull

### Erro de Merge
- Aceite as mudanças ou resolva conflitos manualmente

### Arquivos Grandes
- Adicione arquivos grandes ao `.gitignore`
- Use Git LFS se necessário

## Estrutura Final do Repositório

```
MindCareClinic/
├── README.md                    # Documentação principal
├── package.json                 # Dependências
├── next.config.js              # Configuração Next.js
├── tailwind.config.ts          # Configuração Tailwind
├── app/                        # Páginas da aplicação
├── components/                 # Componentes reutilizáveis
├── lib/                        # Utilitários e constantes
└── upload-scripts/             # Scripts de upload
```

## Próximos Passos

1. ✅ Código carregado no GitHub
2. 🔄 Configurar CI/CD (opcional)
3. 🚀 Deploy em produção (Vercel/Netlify)
4. 📊 Monitoramento e analytics 