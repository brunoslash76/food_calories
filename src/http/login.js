import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export const login = async (email, password) => {
    const auth = getAuth()
    try {
        const user = await signInWithEmailAndPassword(auth, email, password)
        return user
    } catch (error) {
        console.log(error)
        return error
    }
}