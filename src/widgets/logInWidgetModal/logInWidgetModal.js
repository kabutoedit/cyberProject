import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, } from 'firebase/auth';
import { auth, LogIn, LogOut } from '../../app/dataBase/firebaseConfig';
import styles from './style.module.scss';
import { setAdminStatus } from '../../app/store/userSlice';
import { useDispatch } from 'react-redux';
const LoginWidgetModal = ({ isModalOpen, setIsModalOpen }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [user, setUser] = useState(null); // Состояние для пользователя
    const dispatch = useDispatch();
    const admin = firebaseUser => {
        if (firebaseUser?.email === 'kolya2007niger@gmail.com') {
            dispatch(setAdminStatus(true));
        }
        else {
            dispatch(setAdminStatus(false));
        }
    };
    // Отслеживаем состояние пользователя
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                setUser(firebaseUser);
                admin(firebaseUser);
            }
            else {
                setUser(null);
                admin(false);
            }
        });
        // Очистка подписки при размонтировании компонента
        return () => unsubscribe();
    }, []);
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
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Здесь используем метод signInWithEmailAndPassword для входа через email и пароль
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setSuccess(`Успешный вход! Добро пожаловать, ${userCredential.user.email}`);
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
    const handleGoogleLogin = () => {
        LogIn()
            .then(result => {
            console.log('Успешная авторизация через Google:', result.user);
        })
            .catch(error => {
            console.error('Ошибка авторизации через Google:', error);
        });
    };
    // Загружаем данные из localStorage при монтировании компонента
    useEffect(() => {
        const savedPassword = localStorage.getItem('password');
        const savedEmail = localStorage.getItem('email');
        // Если данные есть в localStorage, устанавливаем их в состояния
        if (savedPassword)
            setPassword(savedPassword);
        if (savedEmail)
            setEmail(savedEmail);
    }, []);
    // Функция для обработки изменений в полях формы
    const handleChange = (e) => {
        const { name, value } = e.target;
        // Сохраняем данные в localStorage
        localStorage.setItem(name, value);
        // Обновляем состояния
        if (name === 'email')
            setEmail(value);
        if (name === 'password')
            setPassword(value);
    };
    return (React.createElement("div", { className: styles.modalWidget, onClick: e => e.stopPropagation() }, isModalOpen && (React.createElement("div", { className: styles.modalOverlay, onClick: e => {
            if (e.target === e.currentTarget) {
                closeModal();
            }
        } },
        React.createElement("div", { className: styles.modalContent }, user ? (React.createElement(React.Fragment, null,
            React.createElement("h3", null,
                "Hello, ",
                user.displayName || user.email,
                "!"),
            React.createElement("button", { onClick: closeModal, className: styles.closeButton }, "Close"),
            React.createElement("button", { onClick: LogOut, className: `${styles.closeButton} ${styles.logoutButton}` }, "Log out"))) : (React.createElement(React.Fragment, null, error || success ? (React.createElement(React.Fragment, null,
            React.createElement("h3", null, error ? 'Ошибка' : 'Успех'),
            React.createElement("p", null, error || success),
            React.createElement("button", { onClick: closeModal, className: styles.closeButton }, "Close"))) : (React.createElement(React.Fragment, null,
            React.createElement("h2", null, "Log in"),
            React.createElement("button", { onClick: closeModal, className: styles.closeButtonX },
                React.createElement("svg", { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
                    React.createElement("path", { d: 'M18 6L6 18', stroke: 'black', "stroke-linecap": 'round', "stroke-linejoin": 'round' }),
                    React.createElement("path", { d: 'M6 6L18 18', stroke: 'black', "stroke-linecap": 'round', "stroke-linejoin": 'round' }))),
            React.createElement("form", { onSubmit: handleSignUp, className: styles.form },
                React.createElement("div", { className: styles.inputGroup },
                    React.createElement("label", null, "Email:"),
                    React.createElement("input", { type: 'email', placeholder: ' johnsmith@gmail.com ', value: email, name: 'email', 
                        // onChange={e => setEmail(e.target.value)}
                        onChange: handleChange, required: true })),
                React.createElement("div", { className: styles.inputGroup },
                    React.createElement("label", null, "Password:"),
                    React.createElement("input", { type: 'password', value: password, name: 'password', 
                        // onChange={e => setPassword(e.target.value)}
                        onChange: handleChange, required: true })),
                React.createElement("button", { type: 'submit', className: styles.submitButton }, "Register"),
                React.createElement("button", { type: 'submit', className: styles.submitButton, onClick: handleLogin }, "Log in"),
                React.createElement("button", { className: styles.googleButton, onClick: handleGoogleLogin },
                    React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', x: '0px', y: '0px', width: '50', height: '50', viewBox: '0 0 50 50' },
                        React.createElement("path", { d: 'M 26 2 C 13.308594 2 3 12.308594 3 25 C 3 37.691406 13.308594 48 26 48 C 35.917969 48 41.972656 43.4375 45.125 37.78125 C 48.277344 32.125 48.675781 25.480469 47.71875 20.9375 L 47.53125 20.15625 L 46.75 20.15625 L 26 20.125 L 25 20.125 L 25 30.53125 L 36.4375 30.53125 C 34.710938 34.53125 31.195313 37.28125 26 37.28125 C 19.210938 37.28125 13.71875 31.789063 13.71875 25 C 13.71875 18.210938 19.210938 12.71875 26 12.71875 C 29.050781 12.71875 31.820313 13.847656 33.96875 15.6875 L 34.6875 16.28125 L 41.53125 9.4375 L 42.25 8.6875 L 41.5 8 C 37.414063 4.277344 31.960938 2 26 2 Z M 26 4 C 31.074219 4 35.652344 5.855469 39.28125 8.84375 L 34.46875 13.65625 C 32.089844 11.878906 29.199219 10.71875 26 10.71875 C 18.128906 10.71875 11.71875 17.128906 11.71875 25 C 11.71875 32.871094 18.128906 39.28125 26 39.28125 C 32.550781 39.28125 37.261719 35.265625 38.9375 29.8125 L 39.34375 28.53125 L 27 28.53125 L 27 22.125 L 45.84375 22.15625 C 46.507813 26.191406 46.066406 31.984375 43.375 36.8125 C 40.515625 41.9375 35.320313 46 26 46 C 14.386719 46 5 36.609375 5 25 C 5 13.390625 14.386719 4 26 4 Z' })),
                    "Sing in with Google")))))))))));
};
export default LoginWidgetModal;
