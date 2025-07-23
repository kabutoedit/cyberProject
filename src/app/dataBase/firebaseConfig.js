import { initializeApp } from 'firebase/app'
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth'
// import { getFirestore } from 'firebase/firestore'
// import { collection, getDocs } from 'firebase/firestore'

// Конфигурация Firebase
const firebaseConfig = {
	apiKey: 'AIzaSyCDgsApnMzWvbgQ6uikgt_o6PlLioHTu_A',
	authDomain: 'cyber-5692e.firebaseapp.com',
	projectId: 'cyber-5692e',
	storageBucket: 'cyber-5692e.appspot.com',
	messagingSenderId: 'YOUR_SENDER_ID',
	appId: 'YOUR_APP_ID',
}

// Инициализация Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

// Настройка авторизации
const provider = new GoogleAuthProvider()

export const LogIn = () => signInWithPopup(auth, provider)
export const LogOut = () => signOut(auth)
export const onAuthChange = callback => onAuthStateChanged(auth, callback)
export { auth }
