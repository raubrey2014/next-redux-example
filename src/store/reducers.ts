import { combineReducers, AnyAction } from "redux";
import * as types from "./types";

// COUNTER REDUCER
const counterReducer = (state = 0, { type }: AnyAction) => {
  switch (type) {
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;
    case types.RESET:
      return 0;
    default:
      return state;
  }
};

export interface StoreState {
  lastUpdate: number;
  light: boolean;
}
// INITIAL TIMER STATE
const initialTimerState: StoreState = {
  lastUpdate: 0,
  light: false,
};

// TIMER REDUCER
const timerReducer = (
  state = initialTimerState,
  { type, payload }: AnyAction
) => {
  switch (type) {
    case types.TICK:
      return {
        lastUpdate: payload.ts,
        light: !!payload.light,
      };
    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
  timer: timerReducer,
};

export default combineReducers(reducers);
