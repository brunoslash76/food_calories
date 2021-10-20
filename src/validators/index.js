
import { validateUserCredentials } from "./validateUserCredentials"
import { validateUserData } from "./validateUserData"

export const validateLogin = (email, password) => {
    return validateUserCredentials(email, password)
}

export const validateRegistration = (userData) => {
    return validateUserData(userData)
}