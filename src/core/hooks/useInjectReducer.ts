import { useContext, useMemo } from "react";
import { ReactReduxContext } from "react-redux";
import getReducerInjectors from "services/_base/injectReducers";
import { InjectReducerParams } from "types/redux";

export function useInjectReducer({ key, reducer }: InjectReducerParams) {
  const context = useContext(ReactReduxContext);

  useMemo(() => {
    return getReducerInjectors(context.store).injectReducer(key, reducer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
