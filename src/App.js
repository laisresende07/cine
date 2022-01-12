import React from 'react'
import { ThemeProvider } from 'styled-components'

import Layout from './components/Layout'
import GlobalStyle from './styles/global'

import themes from './styles/themes'

function App() {
  return (
      <ThemeProvider theme={themes.light}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
  );
};

export default App