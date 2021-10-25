import { subWeeks } from 'date-fns'
import {
    doc,
    setDoc,
    query,
    where,
    collection,
    orderBy,
    updateDoc,
    deleteDoc,
    startAt,
} from 'firebase/firestore'
import { db } from '../config/firebase'
import { queryHelper } from '../utils/queryHelper'


export const addFoodEntry = async (foodData) => {
    try {
        const time = new Date()
        const timeId = time.getTime()
        const uid = `${foodData.userId}#${timeId}`
        const foodEntryRef = doc(
            db,
            `foodEntries/${foodData.userId}#${timeId}`,
        )
        await setDoc(foodEntryRef, { ...foodData, uid })
        return getFoodEntries(foodData.userId)
    } catch (error) {
        return error
    }
}

export const updateFoodEntry = async (foodData) => {
    try {
        const foodEntryRef = doc(db, `foodEntries/${foodData.uid}`)
        return await updateDoc(foodEntryRef, foodData)
    } catch (error) {
        return error
    }
}

export const getFoodEntries = async (userId) => {
    //TODO: Add Pagination
    try {
        return queryHelper(null, query(
            collection(db, "foodEntries"),
            orderBy('date'),
            where("userId", "in", [userId])
        ))
    } catch (error) {
        console.error(error)
    }
}

export const deleteFoodEntry = async (foodId) => {
    try {
        await deleteDoc(doc(db, `foodEntries/${foodId}`))
    } catch (error) {
        throw new Error(error)
    }
}

export const getLastTwoWeekEntries = async (userId) => {
    try {
        const twoWeeksBefore = subWeeks(new Date(), 2).getTime()
        const foodRef = collection(db, 'foodEntries/')
        return await queryHelper(null,
            query(
                foodRef,
                orderBy('date'),
                where("userId", "in", [userId]),
                startAt(twoWeeksBefore),
            ))
    } catch (error) {
        console.warn(error)
    }
}

//TODO: PAGINATION EXAMPLE 
// // Query the first page of docs
// const first = query(collection(db, "cities"), orderBy("population"), limit(25));
// const documentSnapshots = await getDocs(first);

// // Get the last visible document
// const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
// console.log("last", lastVisible);

// // Construct a new query starting at this document,
// // get the next 25 cities.
// const next = query(collection(db, "cities"),
//     orderBy("population"),
//     startAfter(lastVisible),
//     limit(25));
