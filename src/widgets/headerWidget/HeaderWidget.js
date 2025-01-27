import React, { useState } from 'react';
import Nav from '../../app/navigation/Nav.js';
import styles from './style.module.scss';
import '../../app/index.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginWidgetModal from '../logInWidgetModal/LoginWidgetModal';
export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    return (React.createElement("header", null,
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: styles.head },
                React.createElement(NavLink, { to: '/', className: styles.logo },
                    React.createElement("img", { src: '/logo.png', alt: 'logo' })),
                React.createElement("label", { className: styles.searchLabel, htmlFor: 'search' },
                    React.createElement("svg", { width: '25', height: '24', viewBox: '0 0 25 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: styles.searchLogo },
                        React.createElement("path", { d: 'M20.9331 20L17.1554 16.2156M19.2489 11.1579C19.2489 13.0563 18.4948 14.8769 17.1524 16.2193C15.81 17.5617 13.9894 18.3158 12.091 18.3158C10.1926 18.3158 8.37197 17.5617 7.0296 16.2193C5.68724 14.8769 4.93311 13.0563 4.93311 11.1579C4.93311 9.2595 5.68724 7.43886 7.0296 6.0965C8.37197 4.75413 10.1926 4 12.091 4C13.9894 4 15.81 4.75413 17.1524 6.0965C18.4948 7.43886 19.2489 9.2595 19.2489 11.1579V11.1579Z', stroke: '#989898', strokeWidth: '1.5', strokeLinecap: 'round' })),
                    React.createElement("input", { className: styles.search, type: 'search', placeholder: 'Search' })),
                React.createElement(Nav, null),
                React.createElement("div", { className: styles.btns },
                    React.createElement("button", { className: styles.likeBtn },
                        React.createElement("svg", { width: '32', height: '32', viewBox: '0 0 32 32', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
                            React.createElement("path", { d: 'M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z', stroke: 'black', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' }))),
                    React.createElement(NavLink, { to: '/cart', className: styles.cartBtn },
                        React.createElement("svg", { width: '32', height: '32', viewBox: '0 0 32 32', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
                            React.createElement("rect", { width: '32', height: '32', fill: 'white' }),
                            React.createElement("path", { d: 'M3 5H7L10 22H26M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97372 27.8239 6.90679 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66662 27.39 6.66667H8M12 26C12 26.5523 11.5523 27 11 27C10.4477 27 10 26.5523 10 26C10 25.4477 10.4477 25 11 25C11.5523 25 12 25.4477 12 26ZM26 26C26 26.5523 25.5523 27 25 27C24.4477 27 24 26.5523 24 26C24 25.4477 24.4477 25 25 25C25.5523 25 26 25.4477 26 26Z', stroke: 'black', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' })),
                        React.createElement("span", null, totalQuantity === 0 ? '' : totalQuantity)),
                    React.createElement("div", { onClick: () => setIsModalOpen(true), className: styles.loginBtn },
                        React.createElement("svg", { width: '32', height: '32', viewBox: '0 0 32 32', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
                            React.createElement("path", { d: 'M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27M21 9.5C21 11.9853 18.9853 14 16.5 14C14.0147 14 12 11.9853 12 9.5C12 7.01472 14.0147 5 16.5 5C18.9853 5 21 7.01472 21 9.5Z', stroke: 'black', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' })),
                        isModalOpen && (React.createElement(LoginWidgetModal, { setIsModalOpen: setIsModalOpen, isModalOpen: isModalOpen }))))))));
}
