import "assets/styles/layout.scss";
import Loader from "components/Common/Loader";
import { HOME, PUBLIC_ROUTES } from "core/constants/routes";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import MainLayout from "./Main";
import PublicLayout from "./Public";

interface IndexLayoutProps {
  children: React.ReactNode;
  routerLoading: boolean;
}

const Layouts = {
  main: MainLayout,
  public: PublicLayout,
};

function Layout(props: IndexLayoutProps) {
  const router = useRouter();
  const { children, routerLoading } = props;

  const isPublicRoute = useMemo(() => PUBLIC_ROUTES.includes(router.pathname), [
    router.pathname,
  ]);
  const [layout, setLayout] = useState<"public" | "main">(
    isPublicRoute ? "public" : "main"
  );

  const BootstrappedLayout = useMemo(() => {
    const currentLayout = layout;
    let child = children;

    if (routerLoading) {
      child = <Loader />;
    }

    const Container = Layouts[currentLayout];

    return <Container>{child}</Container>;
  }, [children, layout, routerLoading]);

  return <>{BootstrappedLayout}</>;
}

export default Layout;
