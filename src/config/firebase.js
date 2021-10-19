// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiFNwr3c2UIodIO8FlIP4NxUN-Ps2axvc",
    authDomain: "foodcalories-d53c8.firebaseapp.com",
    projectId: "foodcalories-d53c8",
    storageBucket: "foodcalories-d53c8.appspot.com",
    messagingSenderId: "691018985799",
    appId: "1:691018985799:web:63fb483242feb4a5761c62"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default app