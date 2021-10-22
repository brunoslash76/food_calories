export const firebaseResponseToUserModel = (data) => {
    const { uid, accessToken } = data.firebaseRes.user
    const { user } = data
    return {
        name: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        token: accessToken,
        uid,
        isAuthenticated: !!uid
    }
}
