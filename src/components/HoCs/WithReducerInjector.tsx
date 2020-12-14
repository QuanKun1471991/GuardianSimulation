/* eslint-disable react/static-property-placement */
import hoistNonReactStatics from "hoist-non-react-statics";
import React from "react";
import { ReactReduxContext } from "react-redux";
import getReducerInjectors from "services/_base/injectReducers";
import { InjectReducerParams } from "types/redux";

export default ({ key, reducer }: InjectReducerParams) => <
  P extends Record<string, unknown>
>(
  WrappedComponent: React.ComponentType<P>
) => {
  class ReducerInjector<
    T extends Omit<P, keyof InjectReducerParams>
  > extends React.Component<T> {
    public static WrappedComponent = WrappedComponent;

    public static contextType = ReactReduxContext;

    public static displayName = `withReducer(${
      WrappedComponent.displayName || WrappedComponent.name || "Component"
    })`;

    constructor(props: T, context: any) {
      super(props, context);

      getReducerInjectors(context.store).injectReducer(key, reducer);
    }

    public render() {
      return <WrappedComponent {...(this.props as P)} />;
    }
  }

  return hoistNonReactStatics(ReducerInjector, WrappedComponent);
};
