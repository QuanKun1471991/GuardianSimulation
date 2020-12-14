export interface ILayoutState {
  isCollapsed: boolean;
}

export enum LayoutActions {
  SET_MENU_COLLAPSED = "[layout] set menu collapsed",
}

export interface ISetMenuCollapsedAction {
  type: LayoutActions.SET_MENU_COLLAPSED;
  payload: {
    isCollapsed: boolean;
  };
}

export type LayoutActionTypes = ISetMenuCollapsedAction;
