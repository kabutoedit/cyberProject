import React, { useState } from 'react';
import styles from './style.module.scss';
import '../../app/index.css';
import ProductCardWidget from '../productCardWidget/productCardWidget';
const PopularProductsWidget = ({ productsData, }) => {
    const [activeCategory, setActiveCategory] = useState('Phones');
    const [fillColors, setFillColors] = useState({});
    const categories = [
        'Phones',
        'Watches',
        'Cameras',
        'Headphones',
        'Computers',
        'Gaming',
    ];
    const categorizedProducts = categories.map(category => ({
        category,
        items: productsData.filter(product => product.category === category),
    }));
    const changeColor = (id) => {
        setFillColors(prevState => ({
            ...prevState,
            [id]: {
                fill: prevState[id]?.fill === 'red' ? '#f6f6f6' : 'red',
                stroke: prevState[id]?.stroke === 'red' ? '#A8A8A8' : 'red',
            },
        }));
    };
    return (React.createElement("section", { className: styles.popularProducts },
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: styles.tags }, categories.map(category => (React.createElement("button", { key: category, className: `${styles.tag} ${activeCategory === category ? styles.active : ''}`, onClick: () => setActiveCategory(category) },
                React.createElement("p", null, category))))),
            React.createElement("div", { className: styles.products }, categorizedProducts
                .find(cat => cat.category === activeCategory)
                ?.items.map(product => (React.createElement(ProductCardWidget, { ...product, fillColors: fillColors[product.id] || {
                    fill: '#f6f6f6',
                    stroke: '#A8A8A8',
                }, onHeartClick: () => changeColor(product.id) })))))));
};
export default PopularProductsWidget;
