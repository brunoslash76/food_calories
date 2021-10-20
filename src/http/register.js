import { createUserWithEmailAndPassword } from 'firebase/auth'

import { auth } from '../config/firebase'

export const register = (user) => {
    try {
        const res = createUserWithEmailAndPassword(auth, user.email, user.password)
        return res
    } catch (error) {
        return error
    }
}
