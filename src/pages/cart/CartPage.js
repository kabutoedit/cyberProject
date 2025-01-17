import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProductFromCart, updateProductQuantity, } from '../../app/store/slice';
import styles from './style.module.scss';
import '../../app/index.css';
const Cart = () => {
    const dispatch = useDispatch();
    const { items, totalPrice } = useSelector((state) => state.cart);
    const handleRemoveItem = (id) => {
        dispatch(removeProductFromCart(id));
    };
    const handleUpdateQuantity = (id, quantity) => {
        dispatch(updateProductQuantity({ id, quantity }));
    };
    return (React.createElement("div", { className: styles.cartPage },
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: styles.cartPageContent },
                React.createElement("div", { className: styles.addedProducts },
                    React.createElement("h3", { className: styles.cartTitle }, "Shopping Cart"),
                    React.createElement("div", { className: styles.products }, items.map(item => (React.createElement("div", { className: styles.product },
                        React.createElement("div", { className: styles.productImg },
                            React.createElement("img", { src: item.img, alt: item.name })),
                        React.createElement("p", { className: styles.productName }, item.name),
                        React.createElement("div", { className: styles.btns },
                            React.createElement("button", { onClick: () => handleUpdateQuantity(item.id, item.quantity - 1) }, "-"),
                            React.createElement("span", null, item.quantity),
                            React.createElement("button", { onClick: () => handleUpdateQuantity(item.id, item.quantity + 1) }, "+")),
                        React.createElement("p", { className: styles.productPrice },
                            "$",
                            item.price * item.quantity),
                        React.createElement("i", { className: styles.delete, onClick: () => handleRemoveItem(item.id) },
                            React.createElement("svg", { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
                                React.createElement("path", { d: 'M18 6L6 18', stroke: 'black', "stroke-linecap": 'round', "stroke-linejoin": 'round' }),
                                React.createElement("path", { d: 'M6 6L18 18', stroke: 'black', "stroke-linecap": 'round', "stroke-linejoin": 'round' })))))))),
                React.createElement("div", { className: styles.orderSum },
                    React.createElement("h4", { className: styles.orderSumTitle }, "Order Summary"),
                    React.createElement("label", { className: styles.label, htmlFor: 'input' },
                        React.createElement("p", { className: styles.inputText }, "Discount code / Promo code"),
                        React.createElement("input", { className: styles.input, type: 'number', placeholder: 'Code' })),
                    React.createElement("label", { className: styles.label, htmlFor: 'input' },
                        React.createElement("p", { className: styles.inputText }, "Your bonus card number"),
                        React.createElement("input", { className: styles.input, type: 'number', placeholder: 'Enter Card Number' }),
                        React.createElement("button", { className: styles.apply }, "Apply")),
                    React.createElement("h5", { className: styles.text },
                        "Subtotal ",
                        React.createElement("p", null,
                            "$",
                            totalPrice)),
                    React.createElement("div", { className: styles.additionsToThePrice },
                        React.createElement("h5", { className: `${styles.text} ${styles.grayText}` },
                            "Estimated Tax ",
                            React.createElement("p", null,
                                "$",
                                totalPrice > 0 ? 50 : totalPrice)),
                        React.createElement("h5", { className: `${styles.text} ${styles.grayText}` },
                            "Estimated shipping & Handling",
                            ' ',
                            React.createElement("p", null,
                                "$",
                                totalPrice > 0 ? 29 : totalPrice))),
                    React.createElement("h5", { className: styles.text },
                        "Total ",
                        React.createElement("p", null,
                            "$",
                            totalPrice > 0 ? totalPrice + 50 + 29 : totalPrice)),
                    React.createElement("button", { className: styles.btn }, "Checkout"))))));
};
export default Cart;
