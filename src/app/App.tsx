import './App.css'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from '../pages/home/HomePage'
import Cart from '../pages/cart/CartPage'
import HeaderWidget from '../widgets/headerWidget/HeaderWidget'
import About from '../pages/about/About'
import ContactUs from '../pages/contactUs/ContactUs'
import Blog from '../pages/blog/Blog'

function App() {
	return (
		<>
			<HeaderWidget />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contactUs' element={<ContactUs />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</>
	)
}

export default App
