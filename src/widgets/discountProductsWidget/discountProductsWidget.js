import React, { useState } from 'react';
import styles from './style.module.scss';
import '../../app/index.css';
import ProductCardWidget from '../productCardWidget/productCardWidget';
import AdminPanelWidget from '../adminPanelWidget/adminPanelWidget';
const DiscountProductsWidget = ({ productsData, }) => {
    const [fillColors, setFillColors] = useState({});
    const changeColor = (id) => {
        setFillColors(prevState => ({
            ...prevState,
            [id]: {
                fill: prevState[id]?.fill === 'red' ? '#f6f6f6' : 'red',
                stroke: prevState[id]?.stroke === 'red' ? '#A8A8A8' : 'red',
            },
        }));
    };
    return (React.createElement("section", { className: styles.discountProducts },
        React.createElement("div", { className: 'container' },
            React.createElement("h2", { className: styles.discountProductsTitle }, "Discounts up to -50%"),
            React.createElement("div", { className: styles.products },
                productsData.slice(20, 24).map((product, index) => (React.createElement(ProductCardWidget, { ...product, key: product.id ?? index, fillColors: fillColors[product.id] || {
                        fill: '#f6f6f6',
                        stroke: '#A8A8A8',
                    }, onHeartClick: () => changeColor(product.id) }))),
                React.createElement(AdminPanelWidget, null)))));
};
export default DiscountProductsWidget;
