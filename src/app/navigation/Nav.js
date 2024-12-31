import { NavLink } from 'react-router-dom';
import React from 'react';
import styles from './style.module.scss';
export default function Nav() {
    return (React.createElement("nav", null,
        React.createElement("ul", { className: styles.nav },
            React.createElement("li", null,
                React.createElement(NavLink, { className: ({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link, to: '/' }, "home")),
            React.createElement("li", null,
                React.createElement(NavLink, { className: ({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link, to: '/about' }, "about")),
            React.createElement("li", null,
                React.createElement(NavLink, { className: ({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link, to: '/contactUs' }, "contact us")),
            React.createElement("li", null,
                React.createElement(NavLink, { className: ({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link, to: '/blog' }, "blog")))));
}
