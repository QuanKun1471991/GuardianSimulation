import { createMemoSelector } from "services/_base/selectors";
import { IAppState } from "types/redux";

export const VesselSelector = createMemoSelector(
  (state: IAppState) => {
    const { loading, data, selectedVessel } = state.vessel;

    return { loading, data, selectedVessel };
  },
  (vesselResult) => vesselResult
);
