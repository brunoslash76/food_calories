import { validateEmail } from './emailValidator'
import { validatePassword } from './passwordValidator'

export const validateUserCredentials = (email, password) => {
    const emailValidate = validateEmail(email, password)
    const passwordValidate = validatePassword(email, password)

    const error = emailValidate.error || passwordValidate.error
    return {
        error,
        emailErrorMessage: emailValidate.errorMessage,
        passwordErrorMessage: passwordValidate.errorMessage
    }
}