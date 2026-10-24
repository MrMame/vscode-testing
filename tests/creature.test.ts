import { describe, expect, it } from "vitest";
import {
  initialCreatureState,
  isCreatureState,
  petCreature,
} from "../src/game/creature";
import { loadCreature, saveCreature } from "../src/game/storage";

class MemoryStorage implements Pick<Storage, "getItem" | "setItem"> {
  private readonly values = new Map<string, string>();

  getItem(key: string): string | null {
    return this.values.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    this.values.set(key, value);
  }
}

describe("petCreature", () => {
  it("steigert die Freude", () => {
    expect(petCreature({ happiness: 40 })).toEqual({ happiness: 50 });
  });

  it("begrenzt die Freude auf 100", () => {
    expect(petCreature({ happiness: 95 })).toEqual({ happiness: 100 });
  });
});

describe("Spielstand", () => {
  it("liefert den Anfangszustand, wenn noch kein Spielstand existiert", () => {
    expect(loadCreature(new MemoryStorage())).toEqual(initialCreatureState);
  });

  it("speichert und lädt den Spielstand", () => {
    const storage = new MemoryStorage();
    const state = { happiness: 75 };

    saveCreature(storage, state);

    expect(loadCreature(storage)).toEqual(state);
  });

  it("erkennt ungültige Zustände", () => {
    expect(isCreatureState({ happiness: 101 })).toBe(false);
    expect(isCreatureState({ happiness: "glücklich" })).toBe(false);
  });

  it("meldet beschädigte gespeicherte JSON-Daten", () => {
    const storage = new MemoryStorage();
    storage.setItem("pixel-pet:creature:v1", "{");

    expect(() => loadCreature(storage)).toThrow("kein gültiges JSON");
  });
});
