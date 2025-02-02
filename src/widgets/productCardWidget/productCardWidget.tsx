import React from 'react'
import styles from './style.module.scss'
import ButtonBuyWidget from '../buttonBuyWidget/ButtonBuyWidget'
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../../app/store/slice'

interface ProductCardProps {
	id: number
	imageUrl: string
	title: string
	price: number
	fillColors: { fill: string; stroke: string }
	onHeartClick: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({
	id,
	imageUrl,
	title,
	price,
	fillColors,
	onHeartClick,
}) => {
	const dispatch = useDispatch()

	const handleAddToCart = () => {
		dispatch(
			addProductToCart({ id, img: imageUrl, name: title, price, quantity: 1 })
		)
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
		</div>
	)
}

export default ProductCard
