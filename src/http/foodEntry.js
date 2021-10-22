import { doc, setDoc, getDocs, query, where, collection } from 'firebase/firestore'

import { db } from '../config/firebase'


export const addFoodEntry = async (foodData) => {
    try {
        const timeId = new Date()
        const foodEnryRef = doc(
            db,
            `foodEntries/${foodData.userId}#${timeId.getTime()}`,
        )
        const res = await setDoc(foodEnryRef, foodData)
        return res
    } catch (error) {
        return error
    }
}

export const getFoodEntries = async (userId) => {
    try {
        const q = query(collection(db, "foodEntries"), where("userId", "in", [userId]));
        const querySnapshot = await getDocs(q);
        const data = []
        querySnapshot.forEach(doc => data.push(doc.data()))
        return data
    } catch (error) {
        console.error(error)
    }
}
