import React, { useState } from 'react';
import styles from './style.module.scss';
import '../../app/index.css';
import ProductCardWidget from '../../widgets/productCardWidget/productCardWidget';
const CatalogPage = ({ productsData }) => {
    const categories = [
        'Phones',
        'Watches',
        'Cameras',
        'Headphones',
        'Computers',
        'Gaming',
    ];
    const [fillColors, setFillColors] = useState({});
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsOnPage = 9;
    const changeColor = (id) => {
        setFillColors(prevState => ({
            ...prevState,
            [id]: {
                fill: prevState[id]?.fill === 'red' ? '#f6f6f6' : 'red',
                stroke: prevState[id]?.stroke === 'red' ? '#A8A8A8' : 'red',
            },
        }));
    };
    const toggleCategory = (category) => {
        setSelectedCategories(prevSelected => prevSelected.includes(category)
            ? prevSelected.filter(c => c !== category)
            : [...prevSelected, category]);
    };
    const filteredProducts = selectedCategories.length
        ? productsData.filter(product => selectedCategories.includes(product.category))
        : productsData;
    const totalPages = Math.ceil(filteredProducts.length / itemsOnPage);
    const startIndex = (currentPage - 1) * itemsOnPage;
    const endIndex = startIndex + itemsOnPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    };
    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };
    const visiblePages = Array.from({ length: totalPages }, (_, i) => i + 1).filter(page => page >= currentPage - 2 && page <= currentPage + 2);
    return (React.createElement("div", { className: styles.catalogPage },
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: styles.catalogPageIn },
                React.createElement("div", { className: styles.filtersBlock },
                    React.createElement("h2", { className: styles.filtersTitle }, "All products"),
                    React.createElement("div", { className: styles.filters }, categories.map(category => (React.createElement("label", { key: category, htmlFor: '', className: styles.filter },
                        category,
                        React.createElement("input", { type: 'checkbox', className: styles.input, checked: selectedCategories.includes(category), onChange: () => toggleCategory(category) })))))),
                React.createElement("div", { className: styles.catalog },
                    React.createElement("div", { className: styles.products }, paginatedProducts.map(product => (React.createElement(ProductCardWidget, { ...product, key: product.id, fillColors: fillColors[product.id] || {
                            fill: '#f6f6f6',
                            stroke: '#A8A8A8',
                        }, onHeartClick: () => changeColor(product.id) })))),
                    React.createElement("div", { className: styles.pagination },
                        React.createElement("button", { className: styles.paginationButton, onClick: goToPrevPage, disabled: currentPage === 1 },
                            React.createElement("svg", { width: '8', height: '14', viewBox: '0 0 8 14', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
                                React.createElement("path", { d: 'M7 13L1 7L7 1', stroke: 'black' }))),
                        React.createElement("span", null, visiblePages.map(page => (React.createElement("button", { key: page, onClick: () => setCurrentPage(page), className: page === currentPage ? styles.activePage : styles.page }, page)))),
                        React.createElement("button", { className: styles.paginationButton, onClick: goToNextPage, disabled: currentPage === totalPages },
                            React.createElement("svg", { width: '8', height: '14', viewBox: '0 0 8 14', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
                                React.createElement("path", { d: 'M1 1L7 7L1 13', stroke: 'black' })))))))));
};
export default CatalogPage;
