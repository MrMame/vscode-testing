export interface CreatureState {
  happiness: number;
}

export const initialCreatureState: CreatureState = {
  happiness: 60,
};

const MAX_HAPPINESS = 100;
const PET_HAPPINESS_INCREASE = 10;

export function petCreature(state: CreatureState): CreatureState {
  return {
    happiness: Math.min(
      MAX_HAPPINESS,
      state.happiness + PET_HAPPINESS_INCREASE,
    ),
  };
}

export function isCreatureState(value: unknown): value is CreatureState {
  if (typeof value !== "object" || value === null || !("happiness" in value)) {
    return false;
  }

  const happiness = value.happiness;
  return (
    typeof happiness === "number" &&
    Number.isInteger(happiness) &&
    happiness >= 0 &&
    happiness <= MAX_HAPPINESS
  );
}
