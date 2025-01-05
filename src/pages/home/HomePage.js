import React from 'react';
import ProductsWidget from '../../widgets/productsWidget/ProductsWidget';
import CategoryWidget from '../../widgets/categoryWidget/CategoryWidget';
import PopularProductsWidget from '../../widgets/popularProductsWidget/PopularProductsWidget';
import BannersWidget from '../../widgets/bannersWidget/BannersWidget';
import DiscountProductsWidget from '../../widgets/discountProductsWidget/DiscountProductsWidget';
import BigBannerWidget from '../../widgets/bigBannerWidget/bigBannerWidget';
import FooterWidget from '../../widgets/footerWidget/FooterWidget';
export default function HomePage() {
    return (React.createElement(React.Fragment, null,
        React.createElement(ProductsWidget, null),
        React.createElement(CategoryWidget, null),
        React.createElement(PopularProductsWidget, null),
        React.createElement(BannersWidget, null),
        React.createElement(DiscountProductsWidget, null),
        React.createElement(BigBannerWidget, null),
        React.createElement(FooterWidget, null)));
}
