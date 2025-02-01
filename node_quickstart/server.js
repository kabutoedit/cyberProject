// const express = require('express')
// const { MongoClient, ObjectId } = require('mongodb') // Используем ObjectId из mongodb
// const cors = require('cors')
// const { GridFSBucket } = require('mongodb')

// const app = express()
// const PORT = 4000

// // Настройки для CORS (чтобы можно было делать запросы с браузера)
// app.use(cors())
// app.use(express.json())

// // Подключение к MongoDB
// const uri =
// 	'mongodb+srv://kolya2007niger:kolya52589@cyber.idftv.mongodb.net/?retryWrites=true&w=majority&appName=Cyber' // Ваш URL для MongoDB
// const client = new MongoClient(uri)

// let database // Глобальная переменная для хранения подключения к базе данных

// async function connectDB() {
// 	try {
// 		await client.connect()
// 		database = client.db('store') // Указываем имя базы данных
// 		console.log('✅ Подключено к MongoDB')
// 	} catch (error) {
// 		console.error('Ошибка подключения к MongoDB:', error)
// 	}
// }
// connectDB()

// // Получение всех товаров из базы данных
// async function getProductsFromDatabase() {
// 	const productsCollection = database.collection('products') // Указываем имя коллекции
// 	const products = await productsCollection.find({}).toArray() // Извлекаем все документы
// 	return products
// }

// // Маршрут для получения всех товаров
// app.get('/products', async (req, res) => {
// 	try {
// 		const products = await getProductsFromDatabase()

// 		// Добавляем корректный URL изображения
// 		const updatedProducts = products.map(product => ({
// 			...product,
// 			imageUrl: product.imageId
// 				? `http://localhost:4000/image/${product.imageId}` // Используем ID изображения из базы
// 				: null, // Если imageId отсутствует
// 		}))

// 		console.log(
// 			'Продукты с обновленными ссылками на изображения:',
// 			updatedProducts
// 		)
// 		res.json(updatedProducts)
// 	} catch (err) {
// 		console.error('Ошибка получения данных с БД:', err)
// 		res.status(500).send('Ошибка сервера')
// 	}
// })

// // Маршрут для получения изображения по ID
// app.get('/image/:id', async (req, res) => {
// 	try {
// 		const bucket = new GridFSBucket(database, {
// 			bucketName: 'images', // Используем коллекцию images
// 		})

// 		const file = await database.collection('images.files').findOne({
// 			_id: new ObjectId(req.params.id), // Используем ObjectId из mongodb
// 		})

// 		if (!file) return res.status(404).json({ message: 'Файл не найден' })

// 		res.set('Content-Type', file.contentType) // Устанавливаем тип контента
// 		const readStream = bucket.openDownloadStream(file._id)
// 		readStream.pipe(res)
// 	} catch (error) {
// 		console.error('Ошибка получения файла:', error)
// 		res.status(500).json({ message: 'Ошибка сервера', error })
// 	}
// })

// // Маршрут для получения всех изображений
// app.get('/images', async (req, res) => {
// 	try {
// 		const files = await database.collection('images.files').find().toArray()
// 		res.json(files)
// 	} catch (error) {
// 		console.error('Ошибка получения файлов:', error)
// 		res.status(500).json({ error: 'Ошибка сервера' })
// 	}
// })

// // Запуск сервера
// app.listen(PORT, () => {
// 	console.log(`🚀 Сервер запущен на http://localhost:${PORT}`)
// })

const express = require('express')
const { MongoClient, ObjectId, GridFSBucket } = require('mongodb')
const cors = require('cors')

const app = express()
const PORT = 4000

// Настройки для CORS
app.use(cors())
app.use(express.json())

// Подключение к MongoDB
const uri =
	'mongodb+srv://kolya2007niger:kolya52589@cyber.idftv.mongodb.net/?retryWrites=true&w=majority&appName=Cyber'
const client = new MongoClient(uri)

let database // Глобальная переменная для хранения подключения к базе данных

async function connectDB() {
	try {
		await client.connect()
		database = client.db('store') // Указываем имя базы данных
		console.log('✅ Подключено к MongoDB')
	} catch (error) {
		console.error('Ошибка подключения к MongoDB:', error)
	}
}
connectDB()

// Получение всех товаров из базы данных
async function getProductsFromDatabase() {
	const productsCollection = database.collection('products') // Указываем имя коллекции
	const products = await productsCollection.find({}).toArray() // Извлекаем все документы
	return products
}

// Маршрут для получения всех товаров
app.get('/products', async (req, res) => {
	try {
		const products = await getProductsFromDatabase()

		// Добавляем корректный URL изображения
		const updatedProducts = products.map(product => ({
			...product,
			imageUrl: product.imageId
				? `http://localhost:4000/image/${product.imageId}` // Используем ID изображения из базы
				: null, // Если imageId отсутствует
		}))

		res.json(updatedProducts)
	} catch (err) {
		console.error('Ошибка получения данных с БД:', err)
		res.status(500).send('Ошибка сервера')
	}
})

// Маршрут для получения изображения по ID
app.get('/image/:id', async (req, res) => {
	try {
		const bucket = new GridFSBucket(database, {
			bucketName: 'images', // Используем коллекцию images
		})

		const file = await database.collection('images.files').findOne({
			_id: new ObjectId(req.params.id), // Используем ObjectId из mongodb
		})

		if (!file) return res.status(404).json({ message: 'Файл не найден' })

		res.set('Content-Type', file.contentType) // Устанавливаем тип контента
		const readStream = bucket.openDownloadStream(file._id)
		readStream.pipe(res)
	} catch (error) {
		console.error('Ошибка получения файла:', error)
		res.status(500).json({ message: 'Ошибка сервера', error })
	}
})

// Запуск сервера
app.listen(PORT, () => {
	console.log(`🚀 Сервер запущен на http://localhost:${PORT}`)
})
