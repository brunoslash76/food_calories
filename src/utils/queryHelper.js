import { getDocs, query, collection } from 'firebase/firestore'

import { db } from '../config/firebase'

export const queryHelper = async (collectionName, customQuery = null) => {
    let q;
    if (collectionName && typeof collectionName === 'string') {
        q = query(collection(db, collectionName));
    } else if (customQuery) {
        q = customQuery
    }
    const queryUsersSnapshot = await getDocs(q);
    const data = []
    queryUsersSnapshot.forEach(doc => data.push(doc.data()))
    return data
}