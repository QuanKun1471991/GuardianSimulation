/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo } from "react";
import { ReactReduxContext } from "react-redux";
import getSagaInjectors from "services/_base/injectSagas";
import { InjectSagaParams } from "types/redux";

const useInjectSaga = ({ key, saga, mode }: InjectSagaParams) => {
  const context = React.useContext(ReactReduxContext);

  useMemo(() => {
    const injectors = getSagaInjectors(context.store);

    injectors.injectSaga(key, { saga, mode });

    return context.store;
  }, []);

  useEffect(() => {
    return () => {
      const injectors = getSagaInjectors(context.store);

      injectors.ejectSaga(key);
    };
  }, []);
};

export default useInjectSaga;
