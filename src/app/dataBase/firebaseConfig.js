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

// const db = getFirestore(app)

// Функция для получения всех продуктов
// Использовалась до переноса продуктов на Mongo

// export const fetchProducts = async () => {
// 	try {
// 		const productsCollection = collection(db, 'products')
// 		const snapshot = await getDocs(productsCollection)
// 		const products = snapshot.docs.map(doc => ({
// 			id: doc.id,
// 			...doc.data(),
// 		}))
// 		// console.log('Полученные продукты:', products)
// 		return products // Возвращает массив продуктов
// 	} catch (error) {
// 		console.error('Ошибка при получении продуктов:', error)
// 		return []
// 	}
// }

// Инициализация Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

// Настройка авторизации
const provider = new GoogleAuthProvider()

export const LogIn = () => signInWithPopup(auth, provider)
export const LogOut = () => signOut(auth)
export const onAuthChange = callback => onAuthStateChanged(auth, callback)
export { auth }
