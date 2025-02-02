import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import sessionReducer from './session';
import profileReducer from './profile'


const rootReducer = combineReducers({
    session: sessionReducer,
    profile: profileReducer
})
let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk)
} else {
    const logger = require('redux-logger').default
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger))
}

const configureStore = (prelodedState) => {
    return createStore(rootReducer, prelodedState, enhancer)
}

export default configureStore