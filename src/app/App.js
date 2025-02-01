import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from '../pages/home/HomePage';
import Cart from '../pages/cart/CartPage';
import HeaderWidget from '../widgets/headerWidget/HeaderWidget';
import About from '../pages/about/About';
import ContactUs from '../pages/contactUs/ContactUs';
import Blog from '../pages/blog/Blog';
import FooterWidget from '../widgets/footerWidget/FooterWidget';
import CatalogPage from '../pages/catalogPage/CatalogPage';
function App() {
    const [productsData, setProductsData] = useState([]);
    useEffect(() => {
        const getProductsFromServer = async () => {
            try {
                const response = await axios.get('http://localhost:4000/products');
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
        getProductsFromServer(); // Вызываем функцию при монтировании компонента
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderWidget, null),
        React.createElement(Routes, null,
            React.createElement(Route, { path: '/', element: React.createElement(Home, { productsData: productsData }) }),
            React.createElement(Route, { path: '/about', element: React.createElement(About, null) }),
            React.createElement(Route, { path: '/contactUs', element: React.createElement(ContactUs, null) }),
            React.createElement(Route, { path: '/blog', element: React.createElement(Blog, null) }),
            React.createElement(Route, { path: '/cart', element: React.createElement(Cart, null) }),
            React.createElement(Route, { path: '/catalog', element: React.createElement(CatalogPage, { productsData: productsData }) })),
        React.createElement(FooterWidget, null)));
}
export default App;
