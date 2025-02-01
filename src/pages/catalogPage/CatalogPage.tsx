import React, { useState } from 'react'

import styles from './style.module.scss'
import '../../app/index.css'
import ProductCardWidget from '../../widgets/productCardWidget/productCardWidget'

interface Product {
	id: number
	imageUrl: string
	title: string
	price: number
	category: string
}

interface CatalogPageProps {
	productsData: Product[]
}

const CatalogPage: React.FC<CatalogPageProps> = ({ productsData }) => {
	const categories = [
		'Phones',
		'Watches',
		'Cameras',
		'Headphones',
		'Computers',
		'Gaming',
	]

	const [fillColors, setFillColors] = useState<
		Record<number, { fill: string; stroke: string }>
	>({})
	const [selectedCategories, setSelectedCategories] = useState<string[]>([])
	const [currentPage, setCurrentPage] = useState(1)

	const itemsOnPage = 9

	const changeColor = (id: number) => {
		setFillColors(prevState => ({
			...prevState,
			[id]: {
				fill: prevState[id]?.fill === 'red' ? '#f6f6f6' : 'red',
				stroke: prevState[id]?.stroke === 'red' ? '#A8A8A8' : 'red',
			},
		}))
	}

	const toggleCategory = (category: string) => {
		setSelectedCategories(prevSelected =>
			prevSelected.includes(category)
				? prevSelected.filter(c => c !== category)
				: [...prevSelected, category]
		)
	}

	const filteredProducts = selectedCategories.length
		? productsData.filter(product => {
				if (selectedCategories.includes(product.category)) {
					return true
				} else {
					return false
				}
		  })
		: productsData

	const totalPages = Math.ceil(filteredProducts.length / itemsOnPage)
	const startIndex = (currentPage - 1) * itemsOnPage
	const endIndex = startIndex + itemsOnPage
	const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

	const goToNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(prev => prev + 1)
		}
	}

	const goToPrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(prev => prev - 1)
		}
	}

	const visiblePages = Array.from(
		{ length: totalPages },
		(_, i) => i + 1
	).filter(page => page >= currentPage - 2 && page <= currentPage + 2)

	return (
		<div className={styles.catalogPage}>
			<div className='container'>
				<div className={styles.catalogPageIn}>
					<div className={styles.filtersBlock}>
						<h2 className={styles.filtersTitle}>All products</h2>

						<div className={styles.filters}>
							{categories.map(category => (
								<label key={category} htmlFor='' className={styles.filter}>
									{category}
									<input
										type='checkbox'
										className={styles.input}
										checked={selectedCategories.includes(category)}
										onChange={() => toggleCategory(category)}
									/>
								</label>
							))}
						</div>
					</div>
					<div className={styles.catalog}>
						<div className={styles.options}>
							<h2 className={styles.selectedProducts}>
								Selected products: <span>{filteredProducts.length}</span>
							</h2>
							<button className={styles.button}>
								By rating
								<span className={styles.arrow}>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M6 9L12 15L18 9' stroke='#9F9F9F' />
									</svg>
								</span>
							</button>
						</div>
						<div className={styles.products}>
							{paginatedProducts.map(product => (
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

						<div className={styles.pagination}>
							<button
								className={styles.paginationButton}
								onClick={goToPrevPage}
								disabled={currentPage === 1}
							>
								<svg
									width='8'
									height='14'
									viewBox='0 0 8 14'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M7 13L1 7L7 1' stroke='black' />
								</svg>
							</button>

							<span>
								{visiblePages.map(page => (
									<button
										key={page}
										onClick={() => setCurrentPage(page)}
										className={
											page === currentPage ? styles.activePage : styles.page
										}
									>
										{page}
									</button>
								))}
							</span>
							<button
								className={styles.paginationButton}
								onClick={goToNextPage}
								disabled={currentPage === totalPages}
							>
								<svg
									width='8'
									height='14'
									viewBox='0 0 8 14'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M1 1L7 7L1 13' stroke='black' />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CatalogPage
