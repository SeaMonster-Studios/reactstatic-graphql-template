import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Raven from 'raven-js'
//

if (
  typeof document !== 'undefined' &&
  typeof window !== 'undefined' &&
  window.location.hostname !== 'localhost'
) {
  Raven.config(process.env.SENTRY_URL, {
    environment: 'production',
    ignoreUrls: [/.*localhost.* /],
  }).install()
}

// Why did you update //https://github.com/maicki/why-did-you-update
// if (process.env.NODE_ENV !== 'production') {
//   const { whyDidYouUpdate } = require('why-did-you-update')
//   whyDidYouUpdate(React)
// }

// Your top level component
import App from './App'

// Export your top level component (for static rendering)
export default App

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate
  const render = Comp => {
    renderMethod(
      <AppContainer>
        <Comp />
      </AppContainer>,
      document.getElementById('root'),
    )
  }

  // Render!
  render(App)

  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept('./App', () => {
      render(require('./App').default)
    })
  }
}
