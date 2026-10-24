# Agent-Hooks

Lege hier JSON-Konfigurationen für projektbezogene Agent-Hooks ab.

Beispiel: `.github/hooks/session-start.json` führt beim Start einer Agentensitzung einen ungefährlichen Git-Status-Check aus:

```json
{
  "hooks": {
    "SessionStart": [
      {
        "type": "command",
        "command": "git status --short",
        "timeout": 10
      }
    ]
  }
}
```
