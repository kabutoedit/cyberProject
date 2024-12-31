import React from 'react';
import ProductsWidget from '../../widgets/productsWidget/ProductsWidget';
import CategoryWidget from '../../widgets/categoryWidget/CategoryWidget';
export default function HomePage() {
    return (React.createElement(React.Fragment, null,
        React.createElement(ProductsWidget, null),
        React.createElement(CategoryWidget, null)));
}
