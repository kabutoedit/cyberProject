import React from 'react'
import styles from './style.module.scss'
import ButtonBuyWidget from '../buttonBuyWidget/ButtonBuyWidget'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '../../app/store/slice'
import axios from 'axios'
import { RootState } from '../../app/store/store'

interface ProductCardProps {
	id: number
	_id: string
	imageUrl: string
	title: string
	price: number
	fillColors: { fill: string; stroke: string }
	onHeartClick: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({
	id,
	_id,
	imageUrl,
	title,
	price,
	fillColors,
	onHeartClick,
}) => {
	const dispatch = useDispatch()
	const admin = useSelector((state: RootState) => state.user)

	const handleAddToCart = () => {
		dispatch(
			addProductToCart({ id, img: imageUrl, name: title, price, quantity: 1 })
		)
	}

	const deleteProduct = async productId => {
		try {
			const response = await axios.delete(
				`https://cyberproject-fw4e.onrender.com/delete-product/${productId}`
			)
			console.log(response.data.message) // Сообщение об успешном удалении
		} catch (error) {
			console.error('Ошибка:', error.response.data.message) // Сообщение об ошибке
		}
	}

	return (
		<div className={styles.product}>
			<h6 className={styles.heart}>
				<svg
					width='32'
					height='32'
					viewBox='0 0 32 32'
					xmlns='http://www.w3.org/2000/svg'
					onClick={onHeartClick}
					style={{
						fill: fillColors.fill,
						stroke: fillColors.stroke,
					}}
				>
					<path
						d='M5.93415 18.5443L15.3152 27.3569C15.6397 27.6616 15.8019 27.814 15.9999 27.814C16.1979 27.814 16.3602 27.6616 16.6846 27.3569L26.0657 18.5443C28.6739 16.0942 28.9907 12.0622 26.797 9.2348L26.3845 8.70316C23.7603 5.32081 18.4928 5.88806 16.6488 9.75157C16.3883 10.2973 15.6115 10.2973 15.351 9.75157C13.5071 5.88806 8.23955 5.32081 5.61531 8.70316L5.20284 9.2348C3.00918 12.0622 3.32592 16.0942 5.93415 18.5443Z'
						strokeOpacity='0.77'
						strokeWidth='1.4'
					/>
				</svg>
			</h6>
			<div className={styles.img}>
				<img src={imageUrl} alt={title} />
			</div>
			<div className={styles.description}>
				<p className={styles.title}>{title}</p>
				<h2 className={styles.price}>{price}$</h2>
			</div>
			<ButtonBuyWidget onClick={handleAddToCart} />
			{admin.isAdmin ? (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					x='0px'
					y='0px'
					width='100'
					height='100'
					viewBox='0 0 32 32'
					className={styles.delete}
					onClick={() => deleteProduct(_id)}
				>
					<path d='M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z'></path>
				</svg>
			) : (
				''
			)}
		</div>
	)
}

export default ProductCard
