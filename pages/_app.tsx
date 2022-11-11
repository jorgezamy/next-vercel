import { ReactElement, ReactNode } from "react";

import { NextPage } from "next";
import { AppProps } from "next/app";

import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode; //para no importar "ReactElement y ReactNode" podemos poner JSX.Element
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
