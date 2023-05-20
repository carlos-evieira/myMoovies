import React from 'react'
import ReactDOM from 'react-dom/client'
import {Details} from './pages/Details'
import { ThemeProvider } from 'styled-components'
import theme from './Styles/theme'
import GlobalStyles from './Styles/global'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Details />
    </ThemeProvider>
  </React.StrictMode>,
)
