import { createMemoSelector } from "services/_base/selectors";
import { IAppState } from "types/redux";

export const PortSelector = createMemoSelector(
  (state: IAppState) => {
    const { loading, data } = state.port;
    return { loading, data };
  },
  (portResult) => portResult
);
