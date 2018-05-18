import React from 'react'
import { Router } from 'react-static'
import { ThemeProvider } from 'emotion-theming'
import { bindActionCreators } from 'redux'
import { Provider } from 'react-redux'
import {
  fireEvent,
  renderIntoDocument,
  render as renderRTL,
} from 'react-testing-library'
//
import store from '../data/redux-store'
import { theme } from '../styles'
import ErrorBoundary from '../components/ErrorBoundary'

jest.mock('../../node_modules/react-static/lib/client/methods.js')

jest.mock(
  '../../node_modules/react-static/lib/client/components/RouteData.js',
  () => {
    return ({ render }) => render()
  },
)

export function render(ui) {
  return {
    ...renderRTL(
      <ErrorBoundary>
        <Router>
          <ErrorBoundary>
            <ThemeProvider theme={theme}>
              <div id="app">{ui}</div>
            </ThemeProvider>
          </ErrorBoundary>
        </Router>
      </ErrorBoundary>,
    ),
  }
}

export function renderIntoDoc(ui) {
  return {
    ...renderIntoDocument(
      <ErrorBoundary>
        <Router>
          <ErrorBoundary>
            <ThemeProvider theme={theme}>
              <div id="app">{ui}</div>
            </ThemeProvider>
          </ErrorBoundary>
        </Router>
      </ErrorBoundary>,
    ),
  }
}

export function renderWithReduxIntoDoc(ui, actionCreators = {}) {
  const boundActionCreators = bindActionCreators(actionCreators, store.dispatch)
  return {
    wrapper: renderIntoDocument(
      <ErrorBoundary>
        <Provider store={store}>
          <Router>
            <ErrorBoundary>
              <ThemeProvider theme={theme}>
                <div id="app">{ui}</div>
              </ThemeProvider>
            </ErrorBoundary>
          </Router>
        </Provider>
      </ErrorBoundary>,
    ),
    store,
    boundActionCreators,
  }
}

export function renderWithRedux(ui, actionCreators = {}) {
  const boundActionCreators = bindActionCreators(actionCreators, store.dispatch)
  return {
    wrapper: renderRTL(
      <ErrorBoundary>
        <Provider store={store}>
          <Router>
            <ErrorBoundary>
              <ThemeProvider theme={theme}>
                <div id="app">{ui}</div>
              </ThemeProvider>
            </ErrorBoundary>
          </Router>
        </Provider>
      </ErrorBoundary>,
    ),
    store,
    boundActionCreators,
  }
}

export function getNumberFromPixelString(pxString) {
  return parseInt(pxString.match(/(.*\d)px/)[1])
}

export function clickEvent(el) {
  fireEvent(
    el,
    new MouseEvent('click', {
      bubbles: true, // click events must bubble for React to see it
      cancelable: true,
    }),
  )
}

function _event(el, eventName) {
  fireEvent(
    el,
    new Event(eventName, {
      view: window,
      bubbles: true, // click events must bubble for React to see it
      cancelable: true,
    }),
  )
}

export const event = {
  event: _event,
  click: clickEvent,
}
