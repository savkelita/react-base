import React from 'react'
import ReactDOM from 'react-dom'
import { initializeIcons, ThemeProvider } from '@fluentui/react'
import { defaultTheme } from './assets/theme'
import { Home } from './components/Home'

initializeIcons()

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider style={{ backgroundColor: 'transparent', height: '100%' }} theme={defaultTheme}>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
