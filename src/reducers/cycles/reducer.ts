import { CyclesActionTypes } from "./actions";

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}
interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

type ActionProps =
  | {
      type: CyclesActionTypes.ADD_NEW_CYCLE;
      payload: {
        newCycle: Cycle;
      };
    }
  | {
      type:
        | CyclesActionTypes.INTERRUPT_CURRENT_CYCLE
        | CyclesActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED;
    };

export function cyclesReducer(state: CyclesState, action: ActionProps) {
  switch (action.type) {
    case CyclesActionTypes.ADD_NEW_CYCLE:
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      };
    case CyclesActionTypes.INTERRUPT_CURRENT_CYCLE:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, interruptedDate: new Date() };
          } else {
            return cycle;
          }
        }),
        activeCycleId: null,
      };

    case CyclesActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, finishedDate: new Date() };
          } else {
            return cycle;
          }
        }),
        activeCycleId: null,
      };
    default:
      return state;
  }
}
