import './App.css'
import { Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Home from '../pages/home/HomePage'
import Cart from '../pages/cart/CartPage'
import HeaderWidget from '../widgets/headerWidget/HeaderWidget'
import About from '../pages/about/About'
import ContactUs from '../pages/contactUs/ContactUs'
import Blog from '../pages/blog/Blog'
import FooterWidget from '../widgets/footerWidget/FooterWidget'
import CatalogPage from '../pages/catalogPage/CatalogPage'
import { fetchProducts } from '../app/firebase/firebaseConfig'
import { spread } from 'axios'

function App() {
	const [productsData, setProductsData] = useState([])

	useEffect(() => {
		const loadProducts = async () => {
			const productsArray = await fetchProducts()
			setProductsData(productsArray)
		}
		loadProducts()
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
			</Routes>
			<FooterWidget />
		</>
	)
}

export default App
