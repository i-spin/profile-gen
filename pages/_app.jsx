import { useState } from 'react'
import { Button, CssBaseline, GeistProvider } from '@geist-ui/core'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from './store';

function App({ Component, pageProps }) {
  const [themeType, setThemeType] = useState('dark')
  const switchThemes = () => {
    setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
  }
  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </GeistProvider>
  )
}

export default App
