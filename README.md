# Pixel-Pet

Ein kleines Tamagotchi-inspiriertes Pixelart-Spiel zum Ausprobieren von GitHub-Copilot-Funktionen. Die Oberfläche basiert auf HTML und CSS, die Spiellogik auf TypeScript.

## Voraussetzungen

- Node.js 22.12 oder neuer
- npm

## Loslegen

```sh
npm install
npm run dev
```

Vite zeigt nach dem Start die lokale Entwicklungsadresse an.

## Projektbefehle

```sh
npm run dev       # Entwicklungsserver starten
npm run "Starte Test MCP Server" # Test-MCP-Server starten
npm run "Stoppe Test MCP Server" # Test-MCP-Server stoppen
npm run typecheck # TypeScript prüfen
npm test          # Tests ausführen
npm run build     # Produktions-Build erstellen
npm run preview   # Produktions-Build lokal anzeigen
```

## Struktur

- `src/game/` enthält Spielzustand, Interaktionen und Speicherung.
- `src/rendering/` zeichnet das Wesen als Pixelart auf ein Canvas.
- `tests/` enthält Tests für die Spiellogik.
- `docs/feature-requests/` enthält offene Feature-Requests; abgeschlossene Requests gehören nach `done/`.

Das Spiel tauscht keine Nachrichten mit einer Host-Seite aus. Sein Canvas reagiert auf Maus- und Touch-Eingaben. Der Spielstand wird lokal im Browser gespeichert.
