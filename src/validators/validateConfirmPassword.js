export const validateConfirmPasswor = (password, confirmPassword) => {
    const error = password === confirmPassword
    const errorMessage = error ? `Passwords don't match` : null
    return {
        error,
        errorMessage
    }
}