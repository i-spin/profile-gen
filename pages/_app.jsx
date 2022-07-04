import { CssBaseline, GeistProvider } from "@geist-ui/core";
import "../styles/globals.css";
import store from "../redux/store";
import { useState } from "react";

function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((last) => (last === "dark" ? "light" : "dark"));
  };
  return (
    <GeistProvider themeType={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
}

export default App;
