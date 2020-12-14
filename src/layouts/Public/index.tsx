import React, { memo } from "react";

interface PublicLayoutProps {
  children: React.ReactNode;
}

function PublicLayout(props: PublicLayoutProps) {
  const { children } = props;
  return <>{children}</>;
}

export default memo(PublicLayout);
