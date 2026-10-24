import { petCreature, type CreatureState } from "./game/creature";
import { loadCreature, saveCreature } from "./game/storage";
import { drawCreature } from "./rendering/drawCreature";
import "./style.css";

/**
 * Wirft einen Fehler, wenn der übergebene Wert null ist.
 */
function requireValue<T>(value: T | null, errorMessage: string): T {
  if (value === null) {
    throw new Error(errorMessage);
  }
  return value;
}

const canvas = requireValue(
  document.querySelector<HTMLCanvasElement>("#creature"),
  "Das Canvas-Element #creature fehlt im HTML.",
);
const happinessLabel = requireValue(
  document.querySelector<HTMLElement>("#happiness"),
  "Das Element #happiness fehlt im HTML.",
);
const message = requireValue(
  document.querySelector<HTMLElement>("#message"),
  "Das Element #message fehlt im HTML.",
);
const context = requireValue(
  canvas.getContext("2d"),
  "Der Browser stellt keinen Canvas-2D-Kontext bereit.",
);

function showError(error: unknown): void {
  const detail = error instanceof Error ? error.message : "Unbekannter Fehler.";
  message.textContent = `Der Spielstand konnte nicht verarbeitet werden: ${detail}`;
  console.error(error);
}

let state: CreatureState;
try {
  state = loadCreature(window.localStorage);
} catch (error) {
  showError(error);
  state = { happiness: 0 };
  canvas.setAttribute("aria-disabled", "true");
}

function render(): void {
  drawCreature(context, state);
  happinessLabel.textContent = `Freude: ${state.happiness} %`;
}

render();

canvas.addEventListener("pointerdown", () => {
  if (canvas.getAttribute("aria-disabled") === "true") {
    return;
  }

  const nextState = petCreature(state);
  try {
    saveCreature(window.localStorage, nextState);
  } catch (error) {
    showError(error);
    return;
  }

  state = nextState;
  message.textContent = "Dein Wesen freut sich über deine Aufmerksamkeit!";
  render();
});
