import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import dynamic from "next/dynamic";
import React, { memo } from "react";

interface HeaderProps {
  collapsed: boolean;
  onToggle: () => void;
}

function Header({ collapsed, onToggle }: HeaderProps) {
  return (
    <Layout.Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: onToggle,
      })}
    </Layout.Header>
  );
}

export default memo(Header);
