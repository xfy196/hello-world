import React from "react";
import Layouts from "../components/Layouts";
import "normalize.css";
import "./global.css";
export default function App({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}
