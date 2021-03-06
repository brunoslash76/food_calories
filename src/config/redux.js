import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore
} from 'redux'
import thunk from 'redux-thunk'
import { authReducer, caloriesReducer } from '../store/reducers'

function configureStore(initialState) {
    const reducers = {
        authReducer,
        caloriesReducer
    }
    const enhancers = []
    const isDevelopment = true

    if (
        isDevelopment
        && typeof window !== "undefined"
        && window.__REDUX_DEVTOOLS_EXTENSION__
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

const initialState = {}
export const store = configureStore(initialState)
