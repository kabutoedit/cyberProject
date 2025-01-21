import React from 'react';
import ProductsWidget from '../../widgets/productsWidget/ProductsWidget';
import CategoryWidget from '../../widgets/categoryWidget/CategoryWidget';
import BannersWidget from '../../widgets/bannersWidget/BannersWidget';
import DiscountProductsWidget from '../../widgets/discountProductsWidget/DiscountProductsWidget';
import BigBannerWidget from '../../widgets/bigBannerWidget/bigBannerWidget';
import PopularProductsWidget from '../../widgets/popularProductsWidget/PopularProductsWidget';
import LoginWidgetModal from '../../widgets/logInWidgetModal/logInWidgetModal';
const HomePage = ({ productsData }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(ProductsWidget, null),
        React.createElement(CategoryWidget, null),
        React.createElement(PopularProductsWidget, { productsData: productsData }),
        React.createElement(BannersWidget, null),
        React.createElement(DiscountProductsWidget, { productsData: productsData }),
        React.createElement(BigBannerWidget, null),
        React.createElement(LoginWidgetModal, null)));
};
export default HomePage;
