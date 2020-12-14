import genActions from "services/_base/actions";
import {
  ILayoutState,
  LayoutActions,
  LayoutActionTypes,
  ISetMenuCollapsedAction,
} from "./types";

export const { funcs: BaseFunctions, types: BaseActions } = genActions(
  "layout"
);

export function setMenuCollapsed(payload): ISetMenuCollapsedAction {
  return { type: LayoutActions.SET_MENU_COLLAPSED, payload };
}
