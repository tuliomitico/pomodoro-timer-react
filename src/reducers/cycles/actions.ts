import type { Cycle } from "./reducer";

export enum CyclesActionTypes {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
  MARK_CURRENT_CYCLE_AS_FINISHED = "MARK_CURRENT_CYCLE_AS_FINISHED",
}

export function addNewCycleAction(newCycle: Cycle): {
  type: CyclesActionTypes.ADD_NEW_CYCLE;
  payload: {
    newCycle: Cycle;
  };
} {
  return {
    type: CyclesActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  };
}

export function markCurrentCycleAsFinishedAction(): {
  type: CyclesActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED;
} {
  return {
    type: CyclesActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  };
}

export function interruptCurrentCycleAction(): {
  type: CyclesActionTypes.INTERRUPT_CURRENT_CYCLE;
} {
  return {
    type: CyclesActionTypes.INTERRUPT_CURRENT_CYCLE,
  };
}
