import React from 'react';
import { Link } from 'react-router-dom';
import '../../app/index.css';
import styles from './style.module.scss';
const NotFoundPage = () => {
    return (React.createElement("div", { className: styles.notFoundPage },
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: styles.notFoundPageContent },
                React.createElement("h1", { className: styles.header }, "404 - \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430"),
                React.createElement("p", null,
                    "\u041A\u0430\u0436\u0435\u0442\u0441\u044F, \u0432\u044B \u0437\u0430\u0431\u043B\u0443\u0434\u0438\u043B\u0438\u0441\u044C. \u0412\u0435\u0440\u043D\u0438\u0442\u0435\u0441\u044C \u043D\u0430",
                    ' ',
                    React.createElement(Link, { to: '/' }, "\u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443"),
                    ".")))));
};
export default NotFoundPage;
