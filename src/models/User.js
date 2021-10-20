export const createUserFromForm = (target) => {
    const { email, username, password, confirmPassword, isAdmin } = target

    return {
        email: email.value,
        username: username.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
        isAdmin: isAdmin.checked
    }
}