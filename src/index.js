import React from 'react'
// import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
// import store from './store'

import theme from './styles'

import Router from './router'

export default () => (
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>
)
