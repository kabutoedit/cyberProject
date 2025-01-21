import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../app/firebase/firebaseConfig';
import styles from './style.module.scss';
const LoginWidgetModal = ({ isModalOpen, setIsModalOpen }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleSignUp = async (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Пароль должен быть не менее 6 символов');
            setSuccess('');
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            setSuccess(`Регистрация прошла успешно! Добро пожаловать, ${userCredential.user.email}`);
            setError('');
            setEmail('');
            setPassword('');
        }
        catch (err) {
            setError(`Ошибка: ${err.message}`);
            setSuccess('');
        }
    };
    const closeModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (React.createElement("div", { className: styles.modalWidget, onClick: e => e.stopPropagation() }, isModalOpen && (React.createElement("div", { className: styles.modalOverlay, onClick: e => {
            if (e.target === e.currentTarget) {
                closeModal();
            }
        } },
        React.createElement("div", { className: styles.modalContent }, error || success ? (React.createElement(React.Fragment, null,
            React.createElement("h3", null, error ? 'Ошибка' : 'Успех'),
            React.createElement("p", null, error || success),
            React.createElement("button", { onClick: closeModal, className: styles.closeButton }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))) : (React.createElement(React.Fragment, null,
            React.createElement("h2", null, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"),
            React.createElement("button", { onClick: closeModal, className: styles.closeButtonX },
                React.createElement("svg", { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
                    React.createElement("path", { d: 'M18 6L6 18', stroke: 'black', "stroke-linecap": 'round', "stroke-linejoin": 'round' }),
                    React.createElement("path", { d: 'M6 6L18 18', stroke: 'black', "stroke-linecap": 'round', "stroke-linejoin": 'round' }))),
            React.createElement("form", { onSubmit: handleSignUp, className: styles.form },
                React.createElement("div", { className: styles.inputGroup },
                    React.createElement("label", null, "Email:"),
                    React.createElement("input", { type: 'email', placeholder: ' johnsmith@gmail.com ', value: email, onChange: e => setEmail(e.target.value), required: true })),
                React.createElement("div", { className: styles.inputGroup },
                    React.createElement("label", null, "\u041F\u0430\u0440\u043E\u043B\u044C:"),
                    React.createElement("input", { type: 'password', value: password, onChange: e => setPassword(e.target.value), required: true })),
                React.createElement("button", { type: 'submit', className: styles.submitButton }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F")))))))));
};
export default LoginWidgetModal;
