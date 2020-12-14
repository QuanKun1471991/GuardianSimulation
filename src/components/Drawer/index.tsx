import React, { Children } from "react";
import { Drawer } from "antd";

export interface DrawerProps {
  title: string;
  placement: "top" | "right" | "bottom" | "left";
  visible: boolean;
  isCollapsed: boolean;
  children: any;
}

const Index = ({
  title,
  placement,
  visible,
  isCollapsed,
  children,
}: DrawerProps) => {
  return (
    <>
      <Drawer
        title={title}
        placement={placement}
        closable={false}
        // onClose={this.onClose}
        visible={visible}
        key={placement}
        mask={false}
        zIndex={1}
        className={isCollapsed ? "" : "isCollapsed"}
        headerStyle={{
          height: 10,
          paddingLeft: 5,
          paddingRight: 5,
          marginTop: -10,
          bottom: 5,
        }}
        bodyStyle={{ paddingLeft: 5, paddingRight: 5, paddingTop: 5 }}
      >
        {children}
      </Drawer>
    </>
  );
};

export default Index;
