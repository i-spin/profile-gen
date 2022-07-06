import { useState } from "react";
import { CssBaseline, GeistProvider } from "@geist-ui/core";
import '../styles/globals.css';

function App({ Component, pageProps }) {
  const [themeType, setThemeType] = useState('light')
  const toggleTheme = () => {
    setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
  }
  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <Component {...pageProps} themeType={themeType} toggleTheme={toggleTheme} />
    </GeistProvider>
  );
}

export default App;
