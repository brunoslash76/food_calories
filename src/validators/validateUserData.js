import { validateEmail } from "./emailValidator"
import { validatePassword } from "./passwordValidator"
import { validateConfirmPasswor } from "./validateConfirmPassword"
import { validateNoEmptyString } from "./validateNoEmptyString"

export const validateUserData = (userData) => {
    const { email, password, username, confirmPassowrd } = userData

    const emailValidate = validateEmail(email)
    const passwordValidate = validatePassword(password)
    const confirmationPasswordValidate = validateConfirmPasswor(password, confirmPassowrd)
    const usernameValidate = validateNoEmptyString(username)

    const error = emailValidate.error
        || passwordValidate.error
        || confirmationPasswordValidate.error
        || usernameValidate.error

    const validation = {
        error,
        emailErrorMessage: emailValidate.errorMessage,
        passwordErrorMessage: passwordValidate.errorMessage,
        confirmationPasswordErrorMessage: confirmationPasswordValidate.errorMessage,
        usernameErrorMessage: usernameValidate.errorMessage
    }

    return validation

}