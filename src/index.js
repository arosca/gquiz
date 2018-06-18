import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './styles'
import Router from './router'

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    )
  }
}
