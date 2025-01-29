// Версия до добовления изображений
const express = require('express')
const { MongoClient } = require('mongodb')
const cors = require('cors')

const app = express()
const PORT = 4000

// Настройки для CORS (чтобы можно было делать запросы с браузера)
app.use(cors())
app.use(express.json())

// Подключение к MongoDB
const uri =
	'mongodb+srv://kolya2007niger:kolya52589@cyber.idftv.mongodb.net/?retryWrites=true&w=majority&appName=Cyber' // Ваш URL для MongoDB
const client = new MongoClient(uri)

async function connectDB() {
	try {
		await client.connect()
		console.log('✅ Подключено к MongoDB')
	} catch (error) {
		console.error('Ошибка подключения к MongoDB:', error)
	}
}
connectDB()

async function getProductsFromDatabase() {
	const database = client.db('store') // Указываем имя базы данных
	const productsCollection = database.collection('products') // Указываем имя коллекции

	const products = await productsCollection.find({}).toArray() // Извлекаем все документы
	return products
}

app.get('/products', async (req, res) => {
	try {
		const products = await getProductsFromDatabase()
		console.log('Продукты, полученные из базы данных:', products)
		res.json(products)
	} catch (err) {
		console.error('Ошибка получения данных с БД:', err)
		res.status(500).send('Ошибка сервера')
	}
})

// Запуск сервера
app.listen(PORT, () => {
	console.log(`🚀 Сервер запущен на http://localhost:${PORT}`)
})
