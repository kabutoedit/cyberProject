import React from 'react';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';
export default function Button() {
    return (React.createElement(Link, { to: '/catalog' },
        React.createElement("button", { className: styles.btn }, "Shop now")));
}
