import { CssBaseline, GeistProvider } from "@geist-ui/core";
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <GeistProvider themeType="light">
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
}

export default App;
