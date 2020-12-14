import { createMemoSelector } from "services/_base/selectors";
import { IAppState } from "types/redux";

export const LayoutSelector = createMemoSelector(
  (state: IAppState) => {
    const { isCollapsed } = state.layout;
    return { isCollapsed };
  },
  (layoutResult) => layoutResult
);
