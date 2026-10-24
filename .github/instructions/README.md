# Dateibezogene Anweisungen

Lege hier `*.instructions.md`-Dateien mit YAML-Frontmatter und passenden `applyTo`-Mustern für gezielte Projektregeln ab.

Beispiel: `.github/instructions/typescript.instructions.md` wird automatisch für TypeScript-Dateien berücksichtigt:

```markdown
---
description: "Regeln für TypeScript-Dateien"
applyTo: "**/*.ts"
---
# TypeScript

- Verwende sprechende Typen und vermeide `any`.
```
