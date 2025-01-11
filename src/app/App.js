import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../pages/home/HomePage';
import Cart from '../pages/cart/CartPage';
import HeaderWidget from '../widgets/headerWidget/HeaderWidget';
import About from '../pages/about/About';
import ContactUs from '../pages/contactUs/ContactUs';
import Blog from '../pages/blog/Blog';
import ProductsPage from '../pages/catalogPage/CatalogPage';
import FooterWidget from '../widgets/footerWidget/FooterWidget';
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderWidget, null),
        React.createElement(Routes, null,
            React.createElement(Route, { path: '/', element: React.createElement(Home, null) }),
            React.createElement(Route, { path: '/about', element: React.createElement(About, null) }),
            React.createElement(Route, { path: '/contactUs', element: React.createElement(ContactUs, null) }),
            React.createElement(Route, { path: '/blog', element: React.createElement(Blog, null) }),
            React.createElement(Route, { path: '/cart', element: React.createElement(Cart, null) }),
            React.createElement(Route, { path: '/products', element: React.createElement(ProductsPage, null) })),
        React.createElement(FooterWidget, null)));
}
export default App;
