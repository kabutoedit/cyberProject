import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyCDgsApnMzWvbgQ6uikgt_o6PlLioHTu_A',
	authDomain: 'cyber-5692e.firebaseapp.com',
	projectId: 'cyber-5692e',
	storageBucket: 'cyber-5692e.appspot.com',
	messagingSenderId: 'YOUR_SENDER_ID',
	appId: 'YOUR_APP_ID',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
