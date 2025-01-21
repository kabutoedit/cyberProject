import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../app/firebase/firebaseConfig'
import styles from './style.module.scss'

interface Props {
	isModalOpen: boolean
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginWidgetModal: React.FC<Props> = ({ isModalOpen, setIsModalOpen }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [success, setSuccess] = useState('')

	const handleSignUp = async e => {
		e.preventDefault()
		if (password.length < 6) {
			setError('Пароль должен быть не менее 6 символов')
			setSuccess('')
			return
		}
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			)
			setSuccess(
				`Регистрация прошла успешно! Добро пожаловать, ${userCredential.user.email}`
			)
			setError('')
			setEmail('')
			setPassword('')
		} catch (err) {
			setError(`Ошибка: ${err.message}`)
			setSuccess('')
		}
	}

	const closeModal = () => {
		setIsModalOpen(!isModalOpen)
	}

	return (
		<div className={styles.modalWidget} onClick={e => e.stopPropagation()}>
			{isModalOpen && (
				<div
					className={styles.modalOverlay}
					onClick={e => {
						if (e.target === e.currentTarget) {
							closeModal()
						}
					}}
				>
					<div className={styles.modalContent}>
						{error || success ? (
							<>
								<h3>{error ? 'Ошибка' : 'Успех'}</h3>
								<p>{error || success}</p>
								<button onClick={closeModal} className={styles.closeButton}>
									Закрыть
								</button>
							</>
						) : (
							<>
								<h2>Регистрация</h2>
								<button onClick={closeModal} className={styles.closeButtonX}>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M18 6L6 18'
											stroke='black'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
										<path
											d='M6 6L18 18'
											stroke='black'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>
								</button>
								<form onSubmit={handleSignUp} className={styles.form}>
									<div className={styles.inputGroup}>
										<label>Email:</label>
										<input
											type='email'
											placeholder=' johnsmith@gmail.com '
											value={email}
											onChange={e => setEmail(e.target.value)}
											required
										/>
									</div>
									<div className={styles.inputGroup}>
										<label>Пароль:</label>
										<input
											type='password'
											value={password}
											onChange={e => setPassword(e.target.value)}
											required
										/>
									</div>
									<button type='submit' className={styles.submitButton}>
										Зарегистрироваться
									</button>
								</form>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	)
}

export default LoginWidgetModal
