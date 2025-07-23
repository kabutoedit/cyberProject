import React, { useState } from 'react';
import '../../app/index.css';
import styles from './style.module.scss';
import axios from 'axios';
import { useSelector } from 'react-redux';
const AdminPanel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const admin = useSelector((state) => state.user);
    console.log(admin.isAdmin);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('price', price);
        formData.append('category', category);
        if (imageFile) {
            formData.append('image', imageFile);
        }
        try {
            const response = await axios.post('https://cyberproject-fw4e.onrender.com/add-product', formData);
            const data = response.data;
            if (data.message === 'Товар добавлен') {
                console.log('Товар успешно добавлен!');
                setIsOpen(false);
            }
            else {
                alert('Ошибка добавления товара');
            }
        }
        catch (error) {
            console.error('Ошибка при добавлении товара:', error);
            alert('Ошибка сервера');
        }
    };
    return (React.createElement(React.Fragment, null, admin.isAdmin ? (React.createElement(React.Fragment, null,
        React.createElement("button", { className: styles.submitButton, onClick: () => setIsOpen(!isOpen) }, "Add product"),
        isOpen && (React.createElement("div", { className: styles.modalWidget, onClick: e => e.stopPropagation() },
            React.createElement("div", { className: styles.modalOverlay, onClick: e => {
                    if (e.target === e.currentTarget) {
                        setIsOpen(!isOpen);
                    }
                } },
                React.createElement("div", { className: styles.modalContent },
                    React.createElement("h3", null, "Add new product"),
                    React.createElement("form", { className: styles.form, onSubmit: handleSubmit },
                        React.createElement("div", { className: styles.inputGroup },
                            React.createElement("label", null, "Title"),
                            React.createElement("input", { type: 'text', placeholder: 'Title', value: title, onChange: e => setTitle(e.target.value), required: true })),
                        React.createElement("div", { className: styles.inputGroup },
                            React.createElement("label", null, "Price"),
                            React.createElement("input", { type: 'number', placeholder: 'Price', value: price, onChange: e => setPrice(e.target.value), required: true })),
                        React.createElement("div", { className: styles.inputGroup },
                            React.createElement("label", null, "Category"),
                            React.createElement("input", { type: 'text', placeholder: 'Category', value: category, onChange: e => setCategory(e.target.value), required: true })),
                        React.createElement("div", { className: styles.inputGroup },
                            React.createElement("label", null, "Image"),
                            React.createElement("input", { type: 'file', onChange: e => setImageFile(e.target.files[0]), required: true })),
                        React.createElement("button", { className: styles.submitButton, type: 'submit' }, "Add"),
                        React.createElement("button", { className: styles.submitButton, type: 'button', onClick: () => setIsOpen(false) }, "Cancel")),
                    React.createElement("button", { onClick: () => setIsOpen(!isOpen), className: styles.closeButtonX },
                        React.createElement("svg", { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
                            React.createElement("path", { d: 'M18 6L6 18', stroke: 'black', strokeLinecap: 'round', strokeLinejoin: 'round' }),
                            React.createElement("path", { d: 'M6 6L18 18', stroke: 'black', strokeLinecap: 'round', strokeLinejoin: 'round' }))))))))) : ('')));
};
export default AdminPanel;
