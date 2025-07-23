const express = require('express')
const { MongoClient, ObjectId, GridFSBucket } = require('mongodb')
const cors = require('cors')
const multer = require('multer')
const { Readable } = require('stream')
const { title } = require('process')

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
		const products = await productsCollection.find().toArray()
		console.log('Products:', products)

		const updatedProducts = products.map(product => ({
			...product,
			imageUrl: product.imageId
				? // ? `http://localhost:4000/image/${product.imageId}`
				  `https://cyberproject-fw4e.onrender.com/image/${product.imageId}`
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

app.post('/add-product', upload.single('image'), async (req, res) => {
	try {
		// Данные, которые приходят с фронтенда
		const { title, price, category } = req.body
		const imageFile = req.file // загруженный файл изображения

		if (!title || !price || !category) {
			return res.status(400).json({ message: 'Все поля должны быть заполнены' })
		}

		// Получаем максимальный id из существующих товаров и увеличиваем его на 1
		const productsCollection = database.collection('products')
		const lastProduct = await productsCollection
			.find()
			.sort({ id: -1 })
			.limit(1)
			.toArray()

		let newId = 1 // Если товаров нет, начнем с 1
		if (lastProduct.length > 0) {
			newId = lastProduct[0].id + 1 // Увеличиваем id последнего товара
		}

		// Загружаем изображение в GridFS, если оно есть
		let imageId = null
		if (imageFile) {
			const bucket = new GridFSBucket(database, { bucketName: 'images' })

			const readableStream = new Readable()
			readableStream.push(imageFile.buffer)
			readableStream.push(null)

			const uploadStream = bucket.openUploadStream(imageFile.originalname, {
				contentType: imageFile.mimetype,
			})

			readableStream.pipe(uploadStream)

			// Получаем ID загруженного изображения
			await new Promise((resolve, reject) => {
				uploadStream.on('finish', () => resolve())
				uploadStream.on('error', reject)
			})

			imageId = uploadStream.id // сохраняем ID изображения
		}

		// Сохраняем товар в коллекции products
		const newProduct = {
			id: newId, // Устанавливаем новый id
			title,
			price: parseFloat(price), // Преобразуем цену в число
			category,
			imageId, // Если есть изображение, сохраняем его ID
		}

		const result = await productsCollection.insertOne(newProduct)

		res.json({
			message: 'Товар добавлен',
			product: { ...newProduct, _id: result.insertedId },
		})
	} catch (error) {
		console.error('Ошибка добавления товара:', error)
		res.status(500).json({ message: 'Ошибка сервера', error })
	}
})

// Маршрут для удаления товара
app.delete('/delete-product/:id', async (req, res) => {
	try {
		const productId = req.params.id

		const productsCollection = database.collection('products')

		// Находим и удаляем товар по ID
		const result = await productsCollection.deleteOne({
			_id: new ObjectId(productId),
		})

		if (result.deletedCount === 0) {
			return res.status(404).json({ message: 'Товар не найден' })
		}

		res.json({ message: 'Товар удален' })
	} catch (error) {
		console.error('Ошибка при удалении товара:', error)
		res.status(500).json({ message: 'Ошибка сервера', error })
	}
})

// Запуск сервера
app.listen(PORT, () => {
	console.log(`🚀 Сервер запущен на http://localhost:${PORT}`)
})
