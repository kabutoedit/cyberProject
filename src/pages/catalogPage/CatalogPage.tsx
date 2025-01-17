// import styles from './style.module.scss'
// import '../../app/index.css'
// import ProductCardWidget from '../../widgets/productCardWidget/productCardWidget'

// interface Product {
// 	id: number
// 	img: string
// 	title: string
// 	price: string
// 	category: string
// }

// interface CatalogPageProps {
// 	productsData: Product[]
// }

// const CatalogPage: React.FC<CatalogPageProps> = ({ productsData }) => {
// 	const categories = [
// 		'Phones',
// 		'Watches',
// 		'Cameras',
// 		'Headphones',
// 		'Computers',
// 		'Gaming',
// 	]

// 	const [fillColors, setFillColors] = useState<
// 		Record<number, { fill: string; stroke: string }>
// 	>({})
// 	const [selectedCategories, setSelectedCategories] = useState<string[]>([])

// 	const changeColor = (id: number) => {
// 		setFillColors(prevState => {
// 			const newFillColors = { ...prevState }
// 			if (prevState[id]?.fill === 'red') {
// 				newFillColors[id] = {
// 					fill: '#f6f6f6',
// 					stroke: '#A8A8A8',
// 				}
// 			} else {
// 				newFillColors[id] = {
// 					fill: 'red',
// 					stroke: 'red',
// 				}
// 			}
// 			return newFillColors
// 		})
// 	}

// 	const toggleCategory = (category: string) => {
// 		setSelectedCategories(prevSelected => {
// 			const newSelected = [...prevSelected]
// 			if (newSelected.includes(category)) {
// 				const index = newSelected.indexOf(category)
// 				newSelected.splice(index, 1)
// 			} else {
// 				newSelected.push(category)
// 			}
// 			return newSelected
// 		})
// 	}

// 	const filteredProducts = selectedCategories.length
// 		? productsData.filter(product => {
// 				if (selectedCategories.includes(product.category)) {
// 					return true
// 				} else {
// 					return false
// 				}
// 		  })
// 		: productsData

// 	const [currentPage, setCurrentPage] = useState(1)
// 	const itemsOnPage = 9

// 	const totalPages = Math.ceil(filteredProducts.length / itemsOnPage)
// 	const startIndex = (currentPage - 1) * itemsOnPage
// 	const endIndex = startIndex + itemsOnPage
// 	const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

// 	const goToNextPage = () => {
// 		if (currentPage < totalPages) {
// 			setCurrentPage(prev => prev + 1)
// 		}
// 	}

// 	const goToPrevPage = () => {
// 		if (currentPage > 1) {
// 			setCurrentPage(prev => prev - 1)
// 		}
// 	}

// 	const visiblePages = Array.from(
// 		{ length: totalPages },
// 		(_, i) => i + 1
// 	).filter(page => page >= currentPage - 2 && page <= currentPage + 2)

// 	return (
// 		<div className={styles.catalogPage}>
// 			<div className='container'>
// 				<div className={styles.catalogPageIn}>
// 					<div className={styles.filtersBlock}>
// 						<h2 className={styles.filtersTitle}>
// 							All products
// 							<svg
// 								width='24'
// 								height='24'
// 								viewBox='0 0 24 24'
// 								fill='none'
// 								xmlns='http://www.w3.org/2000/svg'
// 								className={styles.arrow}
// 							>
// 								<path
// 									d='M12 8.295L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.295Z'
// 									fill='black'
// 								/>
// 							</svg>
// 						</h2>

// 						<label className={styles.searchLabel} htmlFor='search'>
// 							<svg
// 								width='25'
// 								height='24'
// 								viewBox='0 0 25 24'
// 								fill='none'
// 								xmlns='http://www.w3.org/2000/svg'
// 								className={styles.searchLogo}
// 							>
// 								<path
// 									d='M20.9331 20L17.1554 16.2156M19.2489 11.1579C19.2489 13.0563 18.4948 14.8769 17.1524 16.2193C15.81 17.5617 13.9894 18.3158 12.091 18.3158C10.1926 18.3158 8.37197 17.5617 7.0296 16.2193C5.68724 14.8769 4.93311 13.0563 4.93311 11.1579C4.93311 9.2595 5.68724 7.43886 7.0296 6.0965C8.37197 4.75413 10.1926 4 12.091 4C13.9894 4 15.81 4.75413 17.1524 6.0965C18.4948 7.43886 19.2489 9.2595 19.2489 11.1579V11.1579Z'
// 									stroke='#989898'
// 									stroke-width='1.5'
// 									stroke-linecap='round'
// 								/>
// 							</svg>

// 							<input
// 								className={styles.search}
// 								type='search'
// 								placeholder='Search'
// 							/>
// 						</label>
// 						<div className={styles.filters}>
// 							{categories.map(category => (
// 								<label key={category} htmlFor='' className={styles.filter}>
// 									{category}
// 									<input
// 										type='checkbox'
// 										className={styles.input}
// 										checked={selectedCategories.includes(category)}
// 										onChange={() => toggleCategory(category)}
// 									/>
// 								</label>
// 							))}
// 						</div>
// 					</div>
// 					<div className={styles.catalog}>
// 						<div className={styles.options}>
// 							<h2 className={styles.selectedProducts}>
// 								Selected products: <span>{filteredProducts.length}</span>
// 							</h2>
// 							<button className={styles.button}>
// 								By rating
// 								<span className={styles.arrow}>
// 									<svg
// 										width='24'
// 										height='24'
// 										viewBox='0 0 24 24'
// 										fill='none'
// 										xmlns='http://www.w3.org/2000/svg'
// 									>
// 										<path d='M6 9L12 15L18 9' stroke='#9F9F9F' />
// 									</svg>
// 								</span>
// 							</button>
// 						</div>
// 						<div className={styles.products}>
// 							{filteredProducts.map(product => (
// 								<ProductCardWidget
// 									{...product}
// 									fillColors={
// 										fillColors[product.id] || {
// 											fill: '#f6f6f6',
// 											stroke: '#A8A8A8',
// 										}
// 									}
// 									onHeartClick={() => changeColor(product.id)}
// 								/>
// 							))}
// 						</div>

// 						<div className={styles.pagination}>
// 							<button
// 								className={styles.paginationButton}
// 								onClick={goToPrevPage}
// 								disabled={currentPage === 1}
// 							>
// 								<svg
// 									width='8'
// 									height='14'
// 									viewBox='0 0 8 14'
// 									fill='none'
// 									xmlns='http://www.w3.org/2000/svg'
// 								>
// 									<path d='M7 13L1 7L7 1' stroke='black' />
// 								</svg>
// 							</button>

// 							<span>
// 								{visiblePages.map(page => (
// 									<button
// 										key={page}
// 										onClick={() => setCurrentPage(page)}
// 										className={
// 											page === currentPage ? styles.activePage : styles.page
// 										}
// 									>
// 										{page}
// 									</button>
// 								))}
// 							</span>
// 							<button
// 								className={styles.paginationButton}
// 								onClick={goToNextPage}
// 								disabled={currentPage === totalPages}
// 							>
// 								<svg
// 									width='8'
// 									height='14'
// 									viewBox='0 0 8 14'
// 									fill='none'
// 									xmlns='http://www.w3.org/2000/svg'
// 								>
// 									<path d='M1 1L7 7L1 13' stroke='black' />
// 								</svg>
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default CatalogPage

import React, { useState } from 'react'

import styles from './style.module.scss'
import '../../app/index.css'
import ProductCardWidget from '../../widgets/productCardWidget/productCardWidget'

interface Product {
	id: number
	img: string
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
