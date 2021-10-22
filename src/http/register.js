import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { localStorageUser } from '../adapters/constants'
import { localStorageSetItem } from '../adapters/localStorageAdapter'
import { auth, db } from '../config/firebase'


export const register = async (user) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, user.email, user.password)
        const userRef = doc(
            db,
            'users/' + res.user.uid,
        )
        const userLocal = {
            username: user.username,
            email: user.email,
            uid: res.user.uid,
            isAdmin: user.isAdmin,
            accessToken: res.user.accessToken
        }
        localStorageSetItem(localStorageUser, userLocal)
        setDoc(userRef, userLocal)
        return res
    } catch (error) {
        return error
    }
}
