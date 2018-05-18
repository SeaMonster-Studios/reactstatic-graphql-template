import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'
//
import view from '../../containers/View/reducer'

function middleware() {
  if (process.env.NODE_ENV !== 'production') {
    /* eslint-disable-next-line no-console */
    return composeWithDevTools(
      applyMiddleware(
        ...[require('redux-immutable-state-invariant').default(), thunk],
      ),
    )
  }

  return applyMiddleware(thunk)
}

const reducer = combineReducers({ view })

if (typeof window === 'undefined') {
  global.window = {}
}

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  {}, // initial state
  middleware(),
)
/* eslint-enable */

export default store
