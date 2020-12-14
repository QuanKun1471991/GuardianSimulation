import { Layout } from "antd";
import React, { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenuCollapsed } from "services/layout/actions";
import { LayoutSelector } from "services/layout/selectors";
import { useInjectReducer } from "core/hooks/useInjectReducer";
import layoutReducer from "services/layout/reducers";
import Header from "../Header";
import Sider from "../Sider";

interface MainLayoutProps {
  children: React.ReactNode;
}

function Main(props: MainLayoutProps) {
  useInjectReducer({ key: "layout", reducer: layoutReducer });

  const dispatch = useDispatch();
  const { children } = props;
  const { isCollapsed } = useSelector(LayoutSelector);

  const setCollapsed = () => {
    dispatch(setMenuCollapsed({ isCollapsed: !isCollapsed }));
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toggle = useCallback(() => setCollapsed(), [isCollapsed]);

  const collapsedClassName = useMemo(() => (isCollapsed ? "collapsed" : ""), [
    isCollapsed,
  ]);

  return (
    <Layout>
      <Sider collapsed={isCollapsed} onBreakPoint={() => setCollapsed} />
      <Layout className="site-layout">
        <Header collapsed={isCollapsed} onToggle={toggle} />
        <Layout.Content
          className={`site-layout-background ${collapsedClassName}`}
        >
          {children}
        </Layout.Content>
        <div className="copyright">Guardian | Copyright © WEATHERNEWS INC.</div>
      </Layout>
    </Layout>
  );
}

export default Main;
