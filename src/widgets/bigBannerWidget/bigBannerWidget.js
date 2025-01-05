import React from 'react';
import styles from './style.module.scss';
import ButtonWidget from '../buttonWidget/ButtonWidget';
export default function bigBannerWidget() {
    return (React.createElement("section", { className: styles.bigBannerWidget },
        React.createElement("div", { className: styles.content },
            React.createElement("h2", { className: styles.bigBannerText },
                "Big Summer ",
                React.createElement("h2", { className: styles.big }, "Sale")),
            React.createElement("p", { className: styles.bigBannerTxt }, "Commodo fames vitae vitae leo mauris in. Eu consequat."),
            React.createElement(ButtonWidget, null))));
}
