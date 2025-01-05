import React from 'react';
import styles from './style.module.scss';
import ButtonWidget from '../buttonWidget/ButtonWidget';
export default function BannersWidget() {
    const banners = [
        {
            id: 1,
            img: 'src/widgets/bannersWidget/img/firstBanner.png',
            title: 'Popular Products',
            text: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
        },
        {
            id: 2,
            img: 'src/widgets/bannersWidget/img/secondBanner.png',
            title: 'Ipad Pro',
            text: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
        },
        {
            id: 3,
            img: 'src/widgets/bannersWidget/img/thirdBanner.png',
            title: 'Samsung Galaxy',
            text: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
        },
        {
            id: 4,
            img: 'src/widgets/bannersWidget/img/fourthBanner.png',
            title: 'Macbook Pro',
            text: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
        },
    ];
    return (React.createElement("section", { className: styles.bannersWidget }, banners.map(banner => (React.createElement("div", { key: banner.id, className: `${styles.banner} ${styles[`banner${banner.id}`]}` },
        React.createElement("div", { className: styles.bannerImg, style: { backgroundImage: `url(${banner.img})` } }),
        React.createElement("div", { className: styles.bannerIn },
            React.createElement("h3", { className: styles.bannerTitle }, banner.title),
            React.createElement("p", { className: styles.bannerText }, banner.text),
            React.createElement(ButtonWidget, null)))))));
}
