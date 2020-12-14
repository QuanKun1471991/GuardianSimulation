/* eslint-disable react/static-property-placement */
import hoistNonReactStatics from "hoist-non-react-statics";
import React from "react";
import { ReactReduxContext } from "react-redux";
import getSagaInjectors from "services/_base/injectSagas";
import { GetInjectors, InjectSagaParams } from "types/redux";

export default ({ key, saga, mode }: InjectSagaParams) => <
  P extends Record<string, unknown>
>(
  WrappedComponent: React.ComponentType<P>
) => {
  class SagaInjector<
    T extends Omit<P, keyof InjectSagaParams>
  > extends React.Component<T> {
    public static WrappedComponent = WrappedComponent;

    public static contextType = ReactReduxContext;

    public static displayName = `withSaga(${
      WrappedComponent.displayName || WrappedComponent.name || "Component"
    })`;

    public injectors: GetInjectors;

    constructor(props: T, context?: any) {
      super(props, context);

      this.injectors = getSagaInjectors(context.store);

      this.injectors.injectSaga(key, { saga, mode });
    }

    public componentWillUnmount() {
      this.injectors.ejectSaga(key);
    }

    public render() {
      return <WrappedComponent {...(this.props as P)} />;
    }
  }

  return hoistNonReactStatics(SagaInjector, WrappedComponent);
};
