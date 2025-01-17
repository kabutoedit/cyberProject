import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
createRoot(document.getElementById('root')).render(React.createElement(Provider, { store: store },
    React.createElement(StrictMode, null,
        React.createElement(BrowserRouter, null,
            React.createElement(App, null)))));
