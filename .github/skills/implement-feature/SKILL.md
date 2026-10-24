---
name: implement-feature
description: "Plant und implementiert Projektfunktionen. Verwenden, wenn ein neues Feature geplant, als Feature-Request dokumentiert oder umgesetzt wird."
---

# Features planen und umsetzen

Nutze diesen Ablauf für neue Features und größere fachliche Änderungen. Die immer geltende Rückfrage vor größeren Codeänderungen steht zusätzlich in `.github/copilot-instructions.md`.

## Ablauf

1. Lies `REQUIREMENTS.md`, relevante Projektanweisungen und die betroffenen Teile des bestehenden Codes und der Dokumentation. Prüfe auch offene Feature-Requests unter `docs/feature-requests/`, falls der Ordner existiert.
2. Fasse das Ziel, den Nutzen, den vorgeschlagenen Umfang, wichtige Randfälle und überprüfbare Abnahmekriterien zusammen. Weise auf Widersprüche oder fehlende fachliche Entscheidungen hin.
3. Bevor du größere oder neue fachliche Codeänderungen beginnst, frage, ob aus dem Vorschlag ein Feature-Request erstellt werden soll. Erkläre kurz, dass die Antwort „Ja“ einen Request unter `docs/feature-requests/` anlegt und „Nein“ die Umsetzung ohne Request fortsetzt. Warte auf die Antwort.
4. Bei „Ja“ erstelle einen aussagekräftig benannten Markdown-Request, zum Beispiel `docs/feature-requests/creature-care-actions.md`. Überschreibe keinen bestehenden Request. Dokumentiere mindestens:
   - Titel und Status (`Geplant` oder `In Umsetzung`)
   - Hintergrund und Ziel
   - Umfang und ausdrücklich ausgeschlossene Punkte
   - Abnahmekriterien als überprüfbare Liste
   - relevante technische Hinweise und Prüfschritte
5. Kläre wesentliche offene Produktentscheidungen mit dem Nutzer. Beginne die Implementierung erst, wenn Ziel und Abnahmekriterien ausreichend klar sind.
6. Implementiere in kleinen, zum bestehenden Projekt passenden Änderungen. Halte den Request und seine Abnahmekriterien als Umsetzungsmaßstab ein; ergänze bei Bedarf Tests und Dokumentation.
7. Führe passende Prüfungen aus. Nenne Ergebnisse und nicht ausgeführte Prüfungen ausdrücklich. Markiere keinen Request als abgeschlossen, wenn Abnahmekriterien oder Prüfungen noch offen sind.
8. Wenn die Funktion vollständig umgesetzt und geprüft ist, aktualisiere den Request-Status auf `Abgeschlossen` und verschiebe die Datei nach `docs/feature-requests/done/`, wobei der Dateiname erhalten bleibt. Erstelle fehlende Ordner bei Bedarf. Bei unvollständiger Umsetzung bleibt der Request im offenen Ordner mit Status und Restarbeiten.

## Request-Vorlage

```markdown
# <Feature-Titel>

- Status: Geplant

## Hintergrund und Ziel

<Welches Problem wird gelöst und für wen?>

## Umfang

- <Lieferumfang>

Nicht enthalten:

- <Ausgeschlossene Punkte>

## Abnahmekriterien

- [ ] <Überprüfbares Verhalten>

## Technische Hinweise und Prüfung

- <Betroffene Bereiche, Einschränkungen und relevante Prüfungen>
```
