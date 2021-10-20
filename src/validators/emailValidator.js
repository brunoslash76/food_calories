export function validateEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    /**
     * TODO: This next two lines repeats in validators
     * resolve this code duplication.
     */
    const error = !regex.test(email.toLowerCase())
    const errorMessage = error ? 'E-mail format error' : null
    return {
        error,
        errorMessage
    }
}