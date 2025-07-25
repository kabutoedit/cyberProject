import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from '../pages/home/HomePage';
import HeaderWidget from '../widgets/headerWidget/HeaderWidget';
import About from '../pages/about/About';
import ContactUs from '../pages/contactUs/ContactUs';
import Blog from '../pages/blog/Blog';
import FooterWidget from '../widgets/footerWidget/FooterWidget';
import CatalogPage from '../pages/catalogPage/CatalogPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Cart from '../pages/cart/CartPage';
function App() {
    const [productsData, setProductsData] = useState([]);
    useEffect(() => {
        const getProductsFromServer = async () => {
            try {
                // const response = await axios.get('http://localhost:4000/products')
                const response = await axios.get('https://cyberproject-fw4e.onrender.com/products');
                console.log('Ответ от сервера:', response);
                if (response.data && response.data.length > 0) {
                    setProductsData(response.data);
                }
                else {
                    console.log('Продукты не найдены');
                }
            }
            catch (error) {
                console.error('Ошибка получения данных с API:', error);
            }
        };
        getProductsFromServer();
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderWidget, null),
        React.createElement(Routes, null,
            React.createElement(Route, { path: '/', element: React.createElement(Home, { productsData: productsData }) }),
            React.createElement(Route, { path: '/about', element: React.createElement(About, null) }),
            React.createElement(Route, { path: '/contactUs', element: React.createElement(ContactUs, null) }),
            React.createElement(Route, { path: '/blog', element: React.createElement(Blog, null) }),
            React.createElement(Route, { path: '/cart', element: React.createElement(Cart, null) }),
            React.createElement(Route, { path: '/catalog', element: React.createElement(CatalogPage, { productsData: productsData }) }),
            React.createElement(Route, { path: '*', element: React.createElement(NotFoundPage, null) })),
        React.createElement(FooterWidget, null)));
}
export default App;
