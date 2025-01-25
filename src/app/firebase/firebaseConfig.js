import { initializeApp } from 'firebase/app'
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth'

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

// Создаём провайдера для Google авторизации
const provider = new GoogleAuthProvider()

// Функция входа через Google
export const LogIn = () => signInWithPopup(auth, provider)

// Функция выхода пользователя
export const LogOut = () => signOut(auth)

// Слушатель изменений состояния авторизации
export const onAuthChange = callback => onAuthStateChanged(auth, callback)

// Экспорт объекта auth для других частей приложения
export { auth }

// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app'
// import { getFirestore, collection, onSnapshot } from 'firebase/firestore'
// import {
// 	GoogleAuthProvider,
// 	getAuth,
// 	onAuthStateChanged,
// 	signInWithPopup,
// 	signOut,
// } from 'firebase/auth'
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
// 	apiKey: 'AIzaSyA3RH_sHZlSzYjgWFjMJ8ICqUaSmlM32MI',
// 	authDomain: 'test-react-24.firebaseapp.com',
// 	databaseURL: 'https://test-react-24-default-rtdb.firebaseio.com',
// 	projectId: 'test-react-24',
// 	storageBucket: 'test-react-24.appspot.com',
// 	messagingSenderId: '953116776213',
// 	appId: '1:953116776213:web:e53b5925ca77097c89bb1c',
// 	measurementId: 'G-BTZC17XYPD',
// }

// // Initialize Firebase
// const app = initializeApp(firebaseConfig)
// export const db = getFirestore(app)
// const auth = getAuth(app)
// export const storage = getStorage(app)

// export const categoryCollection = collection(db, 'categories')
// export const productsCollection = collection(db, 'products')
// export const ordersCollection = collection(db, 'orders')

// const provider = new GoogleAuthProvider()
// export const LogIn = () => signInWithPopup(auth, provider)
// export const LogOut = () => signOut(auth)
// export const onAuthChange = callback => onAuthStateChanged(auth, callback)

// export const onCategoriesLoad = callback =>
// 	onSnapshot(categoryCollection, snapshot =>
// 		callback(
// 			snapshot.docs.map(doc => ({
// 				id: doc.id,
// 				...doc.data(),
// 			}))
// 		)
// 	)
// export const onProductsLoad = callback =>
// 	onSnapshot(productsCollection, snapshot =>
// 		callback(
// 			snapshot.docs.map(doc => ({
// 				id: doc.id,
// 				...doc.data(),
// 			}))
// 		)
// 	)
// export const onOrdersLoad = callback =>
// 	onSnapshot(ordersCollection, snapshot =>
// 		callback(
// 			snapshot.docs.map(doc => ({
// 				id: doc.id,
// 				...doc.data(),
// 			}))
// 		)
// 	)

// // отправка фотографии и получение ее url
// export const uploadProductPhoto = file => {
// 	const storageRef = ref(storage, `products/${file.name}`)
// 	return uploadBytes(storageRef, file)
// 		.then(() => {
// 			return getDownloadURL(storageRef)
// 		})
// 		.catch(error => {
// 			console.log('Failed to upload product photo:', error)
// 		})
// }
