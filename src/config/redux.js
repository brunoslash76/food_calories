import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore
} from 'redux'
import thunk from 'redux-thunk'
import { } from '../store/reducers'

export default function configureStore(initialState) {
    const reducers = {}
    const enhancers = []
    const isDevelopment = true
    if (
        isDevelopment &&
        typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION__
    ) {
        enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
    }
    const middlewares = [thunk]
    const rootReducer = combineReducers({
        ...reducers,
    })

    const combineReducersApp = (state, action) => rootReducer(state, action)

    return createStore(
        combineReducersApp,
        initialState,
        compose(
            applyMiddleware(...middlewares),
            ...enhancers
        )
    )
}
