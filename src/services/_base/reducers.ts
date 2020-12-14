/* eslint-disable @typescript-eslint/no-explicit-any */
import produce, { Draft } from "immer";
import { Reducer } from "redux";

interface AnyActions {
  [key: string]: string;
}

const genReducers = <InitialState, Actions extends AnyActions>(
  initialState: InitialState,
  actions: Actions
): Reducer<InitialState> => {
  const reducer = (
    state = initialState,
    action: { type: keyof Actions; payload: Record<string, any> }
  ) => {
    return produce<InitialState>(state, (draft: Draft<InitialState>):
      | InitialState
      | Draft<InitialState> => {
      switch (action.type) {
        case actions.SET_STATE: {
          const { field, ...newState } = action.payload;
          const prevState = state[field];

          if (field) {
            draft[field] = { ...prevState, ...newState };

            return draft;
          }

          return { ...state, ...newState };
        }

        case actions.RESET_STATE: {
          const { field, ...rest } = action.payload || {};

          if (field) {
            draft[field] = { ...initialState[field], ...rest };

            return draft;
          }

          return initialState;
        }

        default: {
          return state;
        }
      }
    });
  };
  return reducer;
};

export default genReducers;
