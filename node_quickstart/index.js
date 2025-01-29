const { MongoClient } = require('mongodb')
const fs = require('fs')

// Строка подключения к MongoDB
const uri =
	'mongodb+srv://kolya2007niger:kolya52589@cyber.idftv.mongodb.net/?retryWrites=true&w=majority&appName=Cyber'
const client = new MongoClient(uri)

async function connectToDB() {
	try {
		console.log('Connecting to MongoDB...')
		await client.connect()
		console.log('Connected to MongoDB')
	} catch (err) {
		console.error('Error connecting to MongoDB', err)
		process.exit(1) // Завершаем программу, если не удалось подключиться
	}
}

// Функция для получения товаров с сервера на порту 4000
async function getProductsFromServer() {
	try {
		const response = await fetch('http://localhost:4000/products') // Запрос к серверу
		const products = await response.json() // Преобразование ответа в JSON
		console.log('Products from server:', products)
		return products
	} catch (err) {
		console.error('Error fetching products from server:', err)
	}
}

// Функция для проверки содержимого коллекции
async function checkProductsInDB() {
	try {
		const database = client.db('store')
		const productsCollection = database.collection('products')

		console.log('Checking products in MongoDB...')
		const products = await productsCollection.find().toArray()
		console.log('Products in the database:', products)
	} catch (err) {
		console.error('Error checking products in MongoDB', err)
	}
}

// Функция для сохранения товаров в файл products.js
async function saveProductsToFile(products) {
	try {
		const productsData = `module.exports = ${JSON.stringify(
			products,
			null,
			2
		)};` // Формируем строку для JS файла
		fs.writeFileSync('products.json', productsData) // Сохраняем файл
		console.log('Products saved to products.js')
	} catch (err) {
		console.error('Error saving products to file:', err)
	}
}

async function main() {
	await connectToDB()
	const products = await getProductsFromServer() // Получаем товары с сервера
	if (products && products.length > 0) {
		// Если товары получены, сохраняем их в файл
		await saveProductsToFile(products)
	}
	await checkProductsInDB() // Проверка, что товары были загружены в БД
}

main()
