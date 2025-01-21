import React, { useState } from 'react'
import styles from './style.module.scss'
import '../../app/index.css'
import ProductCardWidget from '../productCardWidget/productCardWidget'

interface Product {
	id: number
	img: string
	title: string
	price: number
	category: string
}

interface PopularProductsWidgetProps {
	productsData: Product[]
}

const PopularProductsWidget: React.FC<PopularProductsWidgetProps> = ({
	productsData,
}) => {
	const [activeCategory, setActiveCategory] = useState<string>('Phones')
	const [fillColors, setFillColors] = useState<
		Record<number, { fill: string; stroke: string }>
	>({})

	const categories = [
		'Phones',
		'Watches',
		'Cameras',
		'Headphones',
		'Computers',
		'Gaming',
	]

	const categorizedProducts = categories.map(category => ({
		category,
		items: productsData.filter(product => product.category === category),
	}))

	const changeColor = (id: number) => {
		setFillColors(prevState => ({
			...prevState,
			[id]: {
				fill: prevState[id]?.fill === 'red' ? '#f6f6f6' : 'red',
				stroke: prevState[id]?.stroke === 'red' ? '#A8A8A8' : 'red',
			},
		}))
	}

	return (
		<section className={styles.popularProducts}>
			<div className='container'>
				<div className={styles.tags}>
					{categories.map(category => (
						<button
							key={category}
							className={`${styles.tag} ${
								activeCategory === category ? styles.active : ''
							}`}
							onClick={() => setActiveCategory(category)}
						>
							<p>{category}</p>
						</button>
					))}
				</div>
				<div className={styles.products}>
					{categorizedProducts
						.find(cat => cat.category === activeCategory)
						?.items.map(product => (
							<ProductCardWidget
								{...product}
								key={product.id}
								fillColors={
									fillColors[product.id] || {
										fill: '#f6f6f6',
										stroke: '#A8A8A8',
									}
								}
								onHeartClick={() => changeColor(product.id)}
							/>
						))}
				</div>
			</div>
		</section>
	)
}

export default PopularProductsWidget
