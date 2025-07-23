import React, { useState } from 'react'
import '../../app/index.css'
import styles from './style.module.scss'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store/store'

const AdminPanel = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [title, setTitle] = useState('')
	const [price, setPrice] = useState('')
	const [category, setCategory] = useState('')
	const [imageFile, setImageFile] = useState(null)

	const admin = useSelector((state: RootState) => state.user)
	console.log(admin.isAdmin)

	const handleSubmit = async e => {
		e.preventDefault()

		const formData = new FormData()
		formData.append('title', title)
		formData.append('price', price)
		formData.append('category', category)
		if (imageFile) {
			formData.append('image', imageFile)
		}

		try {
			const response = await axios.post(
				'https://cyberproject-fw4e.onrender.com/add-product',
				formData
			)

			const data = response.data
			if (data.message === 'Товар добавлен') {
				console.log('Товар успешно добавлен!')
				setIsOpen(false)
			} else {
				alert('Ошибка добавления товара')
			}
		} catch (error) {
			console.error('Ошибка при добавлении товара:', error)
			alert('Ошибка сервера')
		}
	}

	return (
		<>
			{admin.isAdmin ? (
				<>
					<button
						className={styles.submitButton}
						onClick={() => setIsOpen(!isOpen)}
					>
						Add product
					</button>

					{isOpen && (
						<div
							className={styles.modalWidget}
							onClick={e => e.stopPropagation()}
						>
							<div
								className={styles.modalOverlay}
								onClick={e => {
									if (e.target === e.currentTarget) {
										setIsOpen(!isOpen)
									}
								}}
							>
								<div className={styles.modalContent}>
									<h3>Add new product</h3>
									<form className={styles.form} onSubmit={handleSubmit}>
										<div className={styles.inputGroup}>
											<label>Title</label>
											<input
												type='text'
												placeholder='Title'
												value={title}
												onChange={e => setTitle(e.target.value)}
												required
											/>
										</div>
										<div className={styles.inputGroup}>
											<label>Price</label>
											<input
												type='number'
												placeholder='Price'
												value={price}
												onChange={e => setPrice(e.target.value)}
												required
											/>
										</div>
										<div className={styles.inputGroup}>
											<label>Category</label>
											<input
												type='text'
												placeholder='Category'
												value={category}
												onChange={e => setCategory(e.target.value)}
												required
											/>
										</div>
										<div className={styles.inputGroup}>
											<label>Image</label>
											<input
												type='file'
												onChange={e => setImageFile(e.target.files[0])}
												required
											/>
										</div>
										<button className={styles.submitButton} type='submit'>
											Add
										</button>
										<button
											className={styles.submitButton}
											type='button'
											onClick={() => setIsOpen(false)}
										>
											Cancel
										</button>
									</form>
									<button
										onClick={() => setIsOpen(!isOpen)}
										className={styles.closeButtonX}
									>
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
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
											<path
												d='M6 6L18 18'
												stroke='black'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					)}
				</>
			) : (
				''
			)}
		</>
	)
}

export default AdminPanel
