import { Layout, Menu } from "antd";
import { ROUTES } from "core/constants/routes";
import { useRouter } from "next/router";
import React, { memo, useMemo } from "react";
import { useDispatch } from "react-redux";
import { LoginOutlined, TranslationOutlined } from "@ant-design/icons";
import { stubTrue } from "lodash";

interface SideBarProps {
  collapsed: boolean;
  onBreakPoint: (broken: boolean) => void;
}

function SideBar({ collapsed, onBreakPoint }: SideBarProps) {
  const router = useRouter();
  const routes = useMemo(() => {
    const routesMap = ROUTES.map(({ icon: Icon, path, name }) => (
      <Menu.Item key={path} onClick={() => router.push(path)} icon={<Icon />}>
        {name}
      </Menu.Item>
    ));
    return routesMap;
  }, [router]);

  const selectedRoute = useMemo(() => {
    const matchedRoute = ROUTES.find(({ path }) => {
      if (path === "/") {
        return router.pathname === path;
      }
      return router.pathname.includes(path);
    });
    return matchedRoute?.path;
  }, [router.pathname]);
  return (
    <Layout.Sider
      trigger={null}
      collapsed={collapsed}
      onBreakpoint={onBreakPoint}
      breakpoint="lg"
      collapsedWidth="0"
      collapsible
      className="ant-sider"
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" selectedKeys={[selectedRoute]}>
        {routes}
      </Menu>
    </Layout.Sider>
  );
}

export default memo(SideBar);
