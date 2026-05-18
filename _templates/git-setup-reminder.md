# Obsidian Git — Setup Reminder

Configure these settings in **Settings → Community Plugins → Obsidian Git**:

## Recommended Configuration

| Setting | Value |
|---------|-------|
| Auto-commit interval | `15` minutes |
| Auto-push after commit | ✅ Enabled |
| Auto-pull on startup | ✅ Enabled |
| Commit message | `vault: auto-backup {{date}}` |
| Date format | `YYYY-MM-DD HH:mm:ss` |
| Pull strategy | `rebase` |
| Disable notifications | ❌ (keep enabled for visibility) |

## Commit Message Template

```
vault: auto-backup {{date}}
```

## Initial Setup Commands

Run once in terminal before opening vault in Obsidian:

```bash
cd /path/to/JM_Agenda
git init
git add .
git commit -m "vault: initial setup"
git remote add origin <YOUR_REPO_URL>
git push -u origin main
```

## Notes

- The vault auto-commits every 15 minutes while Obsidian is open.
- Force-push is disabled by default — don't override this.
- `.gitignore` should exclude: `.obsidian/workspace.json`, `.obsidian/cache`, `.trash/`.

---
*This is a reference note — not a template. Keep in `_templates/` for easy access.*
