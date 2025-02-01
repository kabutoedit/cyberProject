// const express = require('express')
// const { MongoClient, ObjectId, GridFSBucket } = require('mongodb')
// const cors = require('cors')

// const app = express()
// const PORT = 4000

// // Настройки для CORS
// app.use(cors())
// app.use(express.json())

// // Подключение к MongoDB
// const uri =
// 	'mongodb+srv://kolya2007niger:kolya52589@cyber.idftv.mongodb.net/?retryWrites=true&w=majority&appName=Cyber'
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

// // Запуск сервера
// app.listen(PORT, () => {
// 	console.log(`🚀 Сервер запущен на http://localhost:${PORT}`)
// })

const express = require('express')
const { MongoClient, ObjectId, GridFSBucket } = require('mongodb')
const cors = require('cors')
const multer = require('multer')
const { Readable } = require('stream')

const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())

// Подключение к MongoDB
const uri =
	'mongodb+srv://kolya2007niger:kolya52589@cyber.idftv.mongodb.net/?retryWrites=true&w=majority&appName=Cyber'
const client = new MongoClient(uri)

let database

async function connectDB() {
	try {
		await client.connect()
		database = client.db('store')
		console.log('✅ Подключено к MongoDB')
	} catch (error) {
		console.error('Ошибка подключения к MongoDB:', error)
	}
}
connectDB()

// Настройка Multer для загрузки файлов
const storage = multer.memoryStorage()
const upload = multer({ storage })

// Маршрут для загрузки изображения
app.post('/upload', upload.single('image'), async (req, res) => {
	try {
		if (!req.file) return res.status(400).json({ message: 'Файл не загружен' })

		const bucket = new GridFSBucket(database, { bucketName: 'images' })

		const readableStream = new Readable()
		readableStream.push(req.file.buffer)
		readableStream.push(null)

		const uploadStream = bucket.openUploadStream(req.file.originalname, {
			contentType: req.file.mimetype,
		})

		readableStream.pipe(uploadStream)

		uploadStream.on('finish', () => {
			res.json({ message: 'Файл загружен', imageId: uploadStream.id })
		})
	} catch (error) {
		console.error('Ошибка загрузки файла:', error)
		res.status(500).json({ message: 'Ошибка сервера', error })
	}
})

// Маршрут для получения всех товаров
app.get('/products', async (req, res) => {
	try {
		const productsCollection = database.collection('products')
		// const products = await productsCollection.find({}).toArray()
		const products = await productsCollection
			.find({}, { projection: { name: 1, price: 1, imageId: 1 } })
			.toArray()

		const updatedProducts = products.map(product => ({
			...product,
			imageUrl: product.imageId
				? `http://localhost:4000/image/${product.imageId}`
				: null,
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
		const bucket = new GridFSBucket(database, { bucketName: 'images' })

		const file = await database.collection('images.files').findOne({
			_id: new ObjectId(req.params.id),
		})

		if (!file) return res.status(404).json({ message: 'Файл не найден' })

		res.set('Content-Type', file.contentType)
		res.set('Cache-Control', 'public, max-age=31536000') // Кэш на 1 год

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
