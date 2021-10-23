import { handleUsersFoodEntries } from '../utils/handleUsersFoodEntries';
import { queryHelper } from '../utils/queryHelper';

export const usersData = async () => {
    //TODO: Add Pagnation
    try {
        const usersData = await queryHelper('users')
        const foodsData = await queryHelper('foodEntries')
        return handleUsersFoodEntries(usersData, foodsData)
    } catch (error) {
        console.error(error)
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
