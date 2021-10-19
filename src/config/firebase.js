// Import the functions you need from the SDKs you need
import env from 'react-dotenv'
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: env.FIREBASE_APIKEY,
    authDomain: env.FIREBASE_AUTH_DOMAIN,
    projectId: env.FIREBASE_CLIENTID,
    storageBucket: env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.FIREBASE_MESSAGE_SENDER_ID,
    appId: env.FIREBASE_APPID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default app