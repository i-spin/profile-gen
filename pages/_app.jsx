import { useState } from 'react'
import { Button, CssBaseline, GeistProvider } from '@geist-ui/core'
import '../styles/globals.css'
import { Moon, Sun } from '@geist-ui/icons'

function App({ Component, pageProps }) {
  const [themeType, setThemeType] = useState('dark')
  const switchThemes = () => {
    setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
  }
  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  )
}

export default App
