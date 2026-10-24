import {
  initialCreatureState,
  isCreatureState,
  type CreatureState,
} from "./creature";

const STORAGE_KEY = "pixel-pet:creature:v1";

type CreatureStorage = Pick<Storage, "getItem" | "setItem">;

export function loadCreature(storage: CreatureStorage): CreatureState {
  const savedState = storage.getItem(STORAGE_KEY);
  if (savedState === null) {
    return { ...initialCreatureState };
  }

  let parsedState: unknown;
  try {
    parsedState = JSON.parse(savedState);
  } catch {
    throw new Error("Der gespeicherte Spielstand ist kein gültiges JSON.");
  }

  if (!isCreatureState(parsedState)) {
    throw new Error("Der gespeicherte Spielstand hat ein ungültiges Format.");
  }

  return parsedState;
}

export function saveCreature(
  storage: CreatureStorage,
  state: CreatureState,
): void {
  storage.setItem(STORAGE_KEY, JSON.stringify(state));
}
