import { getDocs, query, collection } from 'firebase/firestore'

import { db } from '../config/firebase'

export const queryHelper = async (collectionName) => {
    if (!collectionName) return null
    const q = query(collection(db, collectionName));
    const queryUsersSnapshot = await getDocs(q);
    const data = []
    queryUsersSnapshot.forEach(doc => data.push(doc.data()))
    return data
}