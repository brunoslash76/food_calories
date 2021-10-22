import { firebaseResponseToUserModel } from '../../adapters/adaptFirebaseResponseToUser'
import { localStorageGetItem } from '../../adapters/localStorageAdapter'
import {
    AUTH_USER_WITH_LOCALSTORAGE,
    LOGIN_SUCCESSFUL,
    LOGIN_FAILURE,
    REGISTRATION_FAILED,
    REGISTRATION_SUCCESSFUL,
    LOGOFF_USER,
} from '../constants'

const initialState = {
    user: {
        username: null,
        email: null,
        isAdmin: null,
        accessToken: null,
        uid: null,
        isAuthenticated: null
    },
    error: null
}

export default function authReducer(state = initialState, action) {

    switch (action.type) {
        case REGISTRATION_SUCCESSFUL: {
            const user = firebaseResponseToUserModel(action.payload)
            return { user }
        }
        case REGISTRATION_FAILED: {
            return { error: action.payload }
        }
        case LOGIN_SUCCESSFUL: {
            return {
                user: {
                    ...action.payload,
                    isAuthenticated: true,
                },
                error: false
            }
        }
        case LOGIN_FAILURE: {
            return {
                user: action.payload,
                error: true
            }
        }
        case AUTH_USER_WITH_LOCALSTORAGE: {
            return {
                user: action.payload,
                error: false
            }
        }
        case LOGOFF_USER: {
            return initialState
        }
        default:
            return state
    }
}