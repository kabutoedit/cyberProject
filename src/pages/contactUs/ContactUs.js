import React, { useState } from 'react';
import styles from './style.module.scss';
export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const handleChange = e => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = e => {
        e.preventDefault();
        setSubmitted(true);
    };
    return (React.createElement("div", { className: styles.contactContainer },
        React.createElement("h2", { className: styles.title }, "Contact Us"),
        submitted ? (React.createElement("div", { className: styles.successMessage }, "Thank you for your message! We'll get back to you soon.")) : (React.createElement("form", { onSubmit: handleSubmit, className: styles.form },
            React.createElement("div", { className: styles.formGroup },
                React.createElement("label", null, "Name"),
                React.createElement("input", { type: 'text', name: 'name', value: formData.name, onChange: handleChange, required: true, placeholder: 'Your name' })),
            React.createElement("div", { className: styles.formGroup },
                React.createElement("label", null, "Email"),
                React.createElement("input", { type: 'email', name: 'email', value: formData.email, onChange: handleChange, required: true, placeholder: 'heisenberg@example.com' })),
            React.createElement("div", { className: styles.formGroup },
                React.createElement("label", null, "Message"),
                React.createElement("textarea", { name: 'message', value: formData.message, onChange: handleChange, required: true, rows: 5, placeholder: 'Your message' })),
            React.createElement("button", { type: 'submit', className: styles.submitButton }, "Send Message")))));
}
