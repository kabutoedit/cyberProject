import './App.css'
import { Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Home from '../pages/home/HomePage'
import Cart from '../pages/cart/CartPage'
import HeaderWidget from '../widgets/headerWidget/HeaderWidget'
import About from '../pages/about/About'
import ContactUs from '../pages/contactUs/ContactUs'
import Blog from '../pages/blog/Blog'
import FooterWidget from '../widgets/footerWidget/FooterWidget'
import CatalogPage from '../pages/catalogPage/CatalogPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'

function App() {
	const [productsData, setProductsData] = useState([])

	useEffect(() => {
		const getProductsFromServer = async () => {
			try {
				const response = await axios.get('http://localhost:4000/products')
				console.log('Ответ от сервера:', response)

				if (response.data && response.data.length > 0) {
					setProductsData(response.data)
				} else {
					console.log('Продукты не найдены')
				}
			} catch (error) {
				console.error('Ошибка получения данных с API:', error)
			}
		}

		getProductsFromServer()
	}, [])

	return (
		<>
			<HeaderWidget />
			<Routes>
				<Route path='/' element={<Home productsData={productsData} />} />
				<Route path='/about' element={<About />} />
				<Route path='/contactUs' element={<ContactUs />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/cart' element={<Cart />} />
				<Route
					path='/catalog'
					element={<CatalogPage productsData={productsData} />}
				/>
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
			<FooterWidget />
		</>
	)
}

export default App
