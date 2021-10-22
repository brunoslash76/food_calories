import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from '../config/firebase'

export const login = async (email, password) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        const docRef = doc(db, 'users', res.user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return {
                error: false,
                data: docSnap.data()
            }
        } else {
            return {
                error: true,
                data: null
            }
        }

    } catch (error) {
        console.warn(error.message)
        return {
            error: true,
            errorDetails: error.message
        }
    }
}