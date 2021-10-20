export const validatePassword = (password) => {
    const error = password.length < 6
    const errorMessage = error ? 'Password too short' : null
    const validation = {
        error,
        errorMessage
    }
    return validation
}
