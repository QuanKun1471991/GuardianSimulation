/* eslint-disable no-return-await */
import { Modal } from "antd";
import "assets/styles/global.scss";
import { delay } from "core/utils";
import IndexLayout from "layouts";
import { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { ReduxWrapper } from "services/store";

const WrappedApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const [routerLoading, setRouterLoading] = useState(false);

  const routeChangeStart = useCallback(() => setRouterLoading(true), []);
  const routeChangeEnd = useCallback(async () => {
    await delay(300);
    setRouterLoading(false);
  }, []);

  useEffect(() => {
    router.events.on("routeChangeStart", routeChangeStart);
    router.events.on("routeChangeComplete", routeChangeEnd);
    router.events.on("routeChangeError", routeChangeEnd);

    return () => {
      // Destroy all modal
      Modal.destroyAll();

      router.events.off("routeChangeStart", routeChangeStart);
      router.events.off("routeChangeComplete", routeChangeEnd);
      router.events.off("routeChangeError", routeChangeEnd);
    };
  }, [router.events, routeChangeEnd, routeChangeStart]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="text/javascript"
          src="/vendors/WRAP/WRAP.Core-2.3.0.118-min.js"
        />
        <script
          type="text/javascript"
          src="/vendors/WRAP/WRAP.DH-2.3.0.118-min.js"
        />
        <script
          type="text/javascript"
          src="/vendors/WRAP/WRAP.Geo-2.3.0.118-min.js"
        />
        <script type="text/javascript" src="/vendors/WRAP/WRAP.ASM.js" />
        <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.4.2/build/ol.js" />
      </Head>
      <IndexLayout routerLoading={routerLoading}>
        <Component {...pageProps} />
      </IndexLayout>
    </>
  );
};

export default ReduxWrapper.withRedux(WrappedApp);
