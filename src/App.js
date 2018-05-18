import React from 'react'
import { Router } from 'react-static'
import { ThemeProvider } from 'emotion-theming'
import { Provider } from 'react-redux'
import Routes from 'react-static-routes'
//
import store from './data/redux-store'
import { theme } from './styles'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router>
          <ErrorBoundary>
            <ThemeProvider theme={theme}>
              <Routes />
            </ThemeProvider>
          </ErrorBoundary>
        </Router>
      </Provider>
    </ErrorBoundary>
  )
}

export default App
