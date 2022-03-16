import React, { useLayoutEffect } from "react";
import { store } from "../store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { DEFAULT_APP_ACCENT_COLOR, setAppConfig } from "../store/persistedData";

import Head from "next/head";
import dynamic from "next/dynamic";

// import Layout from "../src/layout";
// import ReactHotToast from "@/UIElements/ReactHotToast";
// import BottomSheets from "@/root/src/components/BottomSheets";

import {
  getUserDetailsAction,
  getOrgDetailsAction,
} from "@/tabs/Overview/store/actions";

const PullToRefreshWithNoSSR = dynamic(
  () => import("@/components/PullToRefresh/PullToRefresh"),
  {
    ssr: false,
  }
);
import "@/components/PullToRefresh/index.scss";

import "@/root/src/utils/i18n.js";

import "@/styles/globals.css";
import "../styles/main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Layout = dynamic(() => import("../src/layout"));
const ReactHotToast = dynamic(() => import("@/UIElements/ReactHotToast"));
const BottomSheets = dynamic(() =>
  import("@/root/src/components/BottomSheets")
);

export function reportWebVitals(metric) {
  console.log(metric);
}

const AppComponent = ({ layoutProps, children }) => {
  // REDUX DISPATCH
  const dispatch = useDispatch();

  // FETCHING APP USER TOKEN FROM REDUX
  const userToken = useSelector(
    (state) => state?.persistedDataReducer?.userToken
  );

  // FETCHING APP ACCENT COLOR FROM REDUX
  const appAccent = useSelector(
    (state) => state?.persistedDataReducer?.appAccent
  );

  // IMPORTANT NOTE FOR APP ACCENT COLOR USAGE
  // DEFAULT CLASSPLUS BLUE COLOR IF NO ACCENT COLOR
  // APP ACCENT COLOR CAN BE USED AD
  // var(--appAccentColor) **** in css
  // $color-app-accent **** in scss (main.scss imported)

  // SETTING TOKEN AND COLOR FROM URL IN REDUX STORE
  React.useEffect(() => {
    if (!userToken) {
      setAppConfig();
      dispatch(getUserDetailsAction());
      dispatch(getOrgDetailsAction());
    }
  }, []);

  // React.useLayoutEffect(() => {
  //   setTimeout(() => {
  //     console.log(i18n);
  //     // alert();
  //     i18n.changeLanguage("hn");
  //   }, 4000);
  // }, []);

  return (
    <div
      id="appWrapper"
      style={{
        "--appAccentColor": `#${appAccent || DEFAULT_APP_ACCENT_COLOR}`,
      }}
    >
      <Layout layoutProps={layoutProps}>{children}</Layout>
      <ReactHotToast />
      <BottomSheets />
    </div>
  );
};

const App = ({ Component, pageProps }) => {
  // PROPERTIES NEEDS TO BE DEFINED FOR EACH PAGE
  // EXAMPLE: pages/[courseId]/freecontent/index.jsx
  const layoutProps = Component?.getLayoutProps?.() || {};

  return (
    <React.Fragment>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
      </Head>
      <Provider store={store}>
        <PullToRefreshWithNoSSR />
        <AppComponent layoutProps={layoutProps}>
          <Component {...pageProps} />
        </AppComponent>
      </Provider>
    </React.Fragment>
  );
};

export default App;
