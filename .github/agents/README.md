# Eigene Agenten

Lege hier projektbezogene `*.agent.md`-Dateien für spezialisierte Agenten ab.

Beispiel: `.github/agents/test-reviewer.agent.md` definiert einen Agenten für manuelle Testprüfungen:

```markdown
---
name: Test Reviewer
description: "Prüft Tests auf Lücken und Randfälle."
tools: [read, search]
---
Prüfe die vorhandenen Tests und nenne fehlende wichtige Randfälle.
Ändere keine Dateien.
```
