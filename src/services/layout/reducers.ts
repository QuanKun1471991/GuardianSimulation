import produce from "immer";
import { Reducer } from "redux";
import genReducers from "services/_base/reducers";
import { BaseActions } from "./actions";
import { ILayoutState, LayoutActions, LayoutActionTypes } from "./types";

export const initialState: ILayoutState = {
  isCollapsed: true,
};

const layoutReducer: Reducer<ILayoutState, LayoutActionTypes> = (
  state = initialState,
  action
) => {
  return produce<ILayoutState>(state, (draft) => {
    switch (action.type) {
      case LayoutActions.SET_MENU_COLLAPSED: {
        const { isCollapsed } = action.payload;
        draft.isCollapsed = isCollapsed;

        return draft;
      }
      default:
        return genReducers(initialState, BaseActions)(state, action);
    }
  });
};

export default layoutReducer;
