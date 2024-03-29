import { Fragment, useEffect } from "react";
import PreLoader from "../src/layout/PreLoader";
import { aTagClick, kura_tm_my_load, wowJsAnimation } from "../src/utilits";
import "../styles/globalstyle.css";
import StoreProvider from "../Redux/Provider";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    kura_tm_my_load();
    wowJsAnimation();
    aTagClick();

  });
  return (
    <StoreProvider>
      
      <PreLoader />
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
