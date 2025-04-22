import React, { useState } from 'react'
import styles from './style.module.scss'

export default function ContactUs() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [submitted, setSubmitted] = useState(false)

	const handleChange = e => {
		setFormData(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	const handleSubmit = e => {
		e.preventDefault()
		setSubmitted(true)
	}

	return (
		<div className={styles.contactContainer}>
			<h2 className={styles.title}>Contact Us</h2>
			{submitted ? (
				<div className={styles.successMessage}>
					Thank you for your message! We'll get back to you soon.
				</div>
			) : (
				<form onSubmit={handleSubmit} className={styles.form}>
					<div className={styles.formGroup}>
						<label>Name</label>
						<input
							type='text'
							name='name'
							value={formData.name}
							onChange={handleChange}
							required
							placeholder='Your name'
						/>
					</div>
					<div className={styles.formGroup}>
						<label>Email</label>
						<input
							type='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							required
							placeholder='heisenberg@example.com'
						/>
					</div>
					<div className={styles.formGroup}>
						<label>Message</label>
						<textarea
							name='message'
							value={formData.message}
							onChange={handleChange}
							required
							rows={5}
							placeholder='Your message'
						></textarea>
					</div>
					<button type='submit' className={styles.submitButton}>
						Send Message
					</button>
				</form>
			)}
		</div>
	)
}
