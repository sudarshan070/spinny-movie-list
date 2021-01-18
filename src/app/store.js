import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducer/index'
import { composeWithDevTools } from 'redux-devtools-extension'

let thunk = (store) => next => action => {
    if (typeof action === 'function') {
        return action(store.dispatch)
    }
    return next(action)
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store