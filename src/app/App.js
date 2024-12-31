import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../pages/home/HomePage';
import Cart from '../pages/cart/CartPage';
import Header from '../widgets/header/Header';
import About from '../pages/about/About';
import ContactUs from '../pages/contactUs/ContactUs';
import Blog from '../pages/blog/Blog';
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, null),
        React.createElement(Routes, null,
            React.createElement(Route, { path: '/', element: React.createElement(Home, null) }),
            React.createElement(Route, { path: '/about', element: React.createElement(About, null) }),
            React.createElement(Route, { path: '/contactUs', element: React.createElement(ContactUs, null) }),
            React.createElement(Route, { path: '/blog', element: React.createElement(Blog, null) }),
            React.createElement(Route, { path: '/cart', element: React.createElement(Cart, null) }))));
}
export default App;
