export const validateNoEmptyString = (string) => {
    const error = string.length <= 0 || !string
    const errorMessage = error ? `Username can't be empty` : null
    return {
        error,
        errorMessage
    }
}