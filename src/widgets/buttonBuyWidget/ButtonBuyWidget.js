import React from 'react';
import styles from './style.module.scss';
import { Link } from 'react-router-dom';
const ButtonBuyWidget = ({ onClick }) => {
    return (React.createElement(Link, { to: '/catalog' },
        React.createElement("button", { onClick: onClick, className: styles.btn }, "Buy now")));
};
export default ButtonBuyWidget;
