// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, connectAuthEmulator } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBzGfvQj2PFvAvetpAsOKwV7TwoW_GBEFI',
    authDomain: 'chat-app-af809.firebaseapp.com',
    projectId: 'chat-app-af809',
    storageBucket: 'chat-app-af809.appspot.com',
    messagingSenderId: '362596113163',
    appId: '1:362596113163:web:a547666b7c42a79ddee00e',
    measurementId: 'G-PN3VFJCJ7J',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = {
    google: new GoogleAuthProvider(),
    facebook: new FacebookAuthProvider(),
};
///emulators
if (window.location.hostname === 'localhost') {
    connectFirestoreEmulator(db, 'localhost', 8080);
}
connectAuthEmulator(auth, 'http://localhost:9099');
export { db, auth, provider };
