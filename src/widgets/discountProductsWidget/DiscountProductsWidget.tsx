import React, { useState } from 'react'
import styles from './style.module.scss'
import '../../app/index.css'
import ProductCardWidget from '../productCardWidget/productCardWidget'

interface Product {
	id: number
	img: string
	title: string
	price: string
	category: string
}

interface DiscountProductsWidgetProps {
	products: Product[]
}

const DiscountProductsWidget: React.FC<DiscountProductsWidgetProps> = ({
	products,
}) => {
	const [fillColors, setFillColors] = useState<
		Record<number, { fill: string; stroke: string }>
	>({})

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
		<section className={styles.discountProducts}>
			<div className='container'>
				<h2 className={styles.discountProductsTitle}>Discounts up to -50%</h2>
				<div className={styles.products}>
					{products.slice(0, 4).map(product => (
						<ProductCardWidget
							key={product.id}
							id={product.id}
							img={product.img}
							title={product.title}
							price={product.price}
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

export default DiscountProductsWidget
