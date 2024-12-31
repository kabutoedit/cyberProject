import React from 'react'
import ProductsWidget from '../../widgets/productsWidget/ProductsWidget'
import CategoryWidget from '../../widgets/categoryWidget/CategoryWidget'

export default function HomePage() {
	return (
		<>
			<ProductsWidget />
			<CategoryWidget />
		</>
	)
}
