import React, { useState } from 'react'
import styles from './style.module.scss'
import '../../app/index.css'
import ButtonWidget from '../buttonWidget/ButtonWidget'

const PopularProductsWidget = ({ products }) => {
	const [activeCategory, setActiveCategory] = useState('Phones')
	const [fillColors, setFillColors] = useState({})

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
		items: products.filter(product => product.category === category),
	}))

	const changeColor = id => {
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
							<div className={styles.product} key={product.id}>
								<h6 className={styles.heart}>
									<svg
										width='32'
										height='32'
										viewBox='0 0 32 32'
										xmlns='http://www.w3.org/2000/svg'
										onClick={() => changeColor(product.id)}
										style={{
											fill: fillColors[product.id]?.fill || '#f6f6f6',
											stroke: fillColors[product.id]?.stroke || '#A8A8A8',
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
									<img src={product.img} alt='productImage' />
								</div>
								<div className={styles.description}>
									<p className={styles.title}>{product.title}</p>
									<h2 className={styles.price}>{product.price}</h2>
								</div>
								<ButtonWidget />
							</div>
						))}
				</div>
			</div>
		</section>
	)
}

export default PopularProductsWidget

// export default function PopularProducts() {
// 	const [fillColors, setFillColors] = useState({})

// 	const [activeCategory, setActiveCategory] = useState('newArrival')

// 	const products = {
// 		newArrival: [
// 			{
// 				id: 1,
// 				img: 'src/widgets/popularProductsWidget/img/iphone14pro.png',
// 				title: 'Apple iPhone 14 Pro Max 128GB Deep Purple ',
// 				price: '$900',
// 			},
// 			{
// 				id: 2,
// 				img: 'src/widgets/popularProductsWidget/img/cinemaCamera.png',
// 				title: 'Blackmagic Pocket Cinema Camera 6k',
// 				price: '$2535',
// 			},
// 			{
// 				id: 3,
// 				img: 'src/widgets/popularProductsWidget/img/appleWatch.png',
// 				title: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium ',
// 				price: '$399',
// 			},
// 			{
// 				id: 4,
// 				img: 'src/widgets/popularProductsWidget/img/airPodsMax.png',
// 				title: 'AirPods Max Silver Starlight Aluminium',
// 				price: '$549',
// 			},
// 			{
// 				id: 5,
// 				img: 'src/widgets/popularProductsWidget/img/samsungWatch.png',
// 				title: 'Samsung Galaxy Watch6 Classic 47mm Black',
// 				price: '$369',
// 			},
// 			{
// 				id: 6,
// 				img: 'src/widgets/popularProductsWidget/img/zFold5.png',
// 				title: 'Galaxy Z Fold5 Unlocked | 256GB | Phantom Black',
// 				price: '$1799',
// 			},
// 			{
// 				id: 7,
// 				img: 'src/widgets/popularProductsWidget/img/galaxyBuds.png',
// 				title: `Galaxy Buds FE Graphite
// 	        `,
// 				price: '$99.99',
// 			},
// 			{
// 				id: 8,
// 				img: 'src/widgets/popularProductsWidget/img/ipad.png',
// 				title: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
// 				price: '$398',
// 			},
// 		],
// 		bestseller: [
// 			{
// 				id: 9,
// 				img: 'src/widgets/popularProductsWidget/img/macbookAir.png',
// 				title: 'Apple MacBook Air M2 13.6" 256GB Midnight',
// 				price: '$1199',
// 			},
// 			{
// 				id: 10,
// 				img: 'src/widgets/popularProductsWidget/img/xboxSeriesX.png',
// 				title: 'Xbox Series X 1TB Console Black',
// 				price: '$499',
// 			},
// 			{
// 				id: 11,
// 				img: 'src/widgets/popularProductsWidget/img/ps5.png',
// 				title: 'Sony PlayStation 5 Digital Edition 825GB',
// 				price: '$449',
// 			},
// 			{
// 				id: 12,
// 				img: 'src/widgets/popularProductsWidget/img/dysonVacuum.png',
// 				title: 'Dyson V15 Detect Cordless Vacuum Cleaner',
// 				price: '$749',
// 			},
// 			{
// 				id: 13,
// 				img: 'src/widgets/popularProductsWidget/img/samsungTV.png',
// 				title: 'Samsung 65" QLED 4K Smart TV (Q80C)',
// 				price: '$1599',
// 			},
// 			{
// 				id: 14,
// 				img: 'src/widgets/popularProductsWidget/img/appleWatchUltra.png',
// 				title: 'Apple Watch Ultra 2 GPS + Cellular 49mm Titanium Case',
// 				price: '$799',
// 			},
// 			{
// 				id: 15,
// 				img: 'src/widgets/popularProductsWidget/img/boseSpeaker.png',
// 				title: 'Bose SoundLink Revolve+ II Portable Bluetooth Speaker',
// 				price: '$329',
// 			},
// 			{
// 				id: 16,
// 				img: 'src/widgets/popularProductsWidget/img/sonyCamera.png',
// 				title: 'Sony Alpha a7 IV Full Frame Mirrorless Camera',
// 				price: '$2499',
// 			},
// 		],
// 		featured: [
// 			{
// 				id: 17,
// 				img: 'src/widgets/popularProductsWidget/img/nintendoSwitch.png',
// 				title: 'Nintendo Switch OLED Model White Joy-Con',
// 				price: '$349',
// 			},
// 			{
// 				id: 18,
// 				img: 'src/widgets/popularProductsWidget/img/sonyHeadphones.png',
// 				title: 'Sony WH-1000XM5 Wireless Noise-Canceling Headphones',
// 				price: '$399',
// 			},
// 			{
// 				id: 19,
// 				img: 'src/widgets/popularProductsWidget/img/steamDeck.png',
// 				title: 'Valve Steam Deck 512GB Handheld Gaming Console',
// 				price: '$649',
// 			},
// 			{
// 				id: 20,
// 				img: 'src/widgets/popularProductsWidget/img/fitbitTracker.png',
// 				title: 'Fitbit Charge 6 Fitness Tracker with Heart Rate Monitoring',
// 				price: '$129',
// 			},
// 			{
// 				id: 21,
// 				img: 'src/widgets/popularProductsWidget/img/logitechMX.png',
// 				title: 'Logitech MX Master 3S Wireless Performance Mouse',
// 				price: '$99',
// 			},
// 			{
// 				id: 22,
// 				img: 'src/widgets/popularProductsWidget/img/ankerCharger.png',
// 				title: 'Anker 737 Power Bank (PowerCore 24K) 24,000mAh',
// 				price: '$149',
// 			},
// 			{
// 				id: 23,
// 				img: 'src/widgets/popularProductsWidget/img/smartThermostat.png',
// 				title: 'Google Nest Learning Thermostat (3rd Gen)',
// 				price: '$249',
// 			},
// 			{
// 				id: 24,
// 				img: 'src/widgets/popularProductsWidget/img/airTag.png',
// 				title: 'Apple AirTag (4 Pack)',
// 				price: '$99',
// 			},
// 		],
// 	}

// 	const changeColor = id => {
// 		setFillColors(prevState => ({
// 			...prevState,
// 			[id]: {
// 				fill: prevState[id]?.fill === 'red' ? '#f6f6f6' : 'red',
// 				stroke: prevState[id]?.stroke === 'red' ? '#A8A8A8' : 'red',
// 			},
// 		}))
// 	}

// 	return (
// 		<section className={styles.popularProducts}>
// 			<div className='container'>
// 				<div className={styles.tags}>
// 					<button
// 						className={`${styles.tag} ${
// 							activeCategory === 'newArrival' ? styles.active : ''
// 						}`}
// 						onClick={() => setActiveCategory('newArrival')}
// 					>
// 						New Arrival
// 					</button>
// 					<button
// 						className={`${styles.tag} ${
// 							activeCategory === 'bestseller' ? styles.active : ''
// 						}`}
// 						onClick={() => setActiveCategory('bestseller')}
// 					>
// 						Bestseller
// 					</button>
// 					<button
// 						style={{
// 							width: '159px',
// 						}}
// 						className={`${styles.tag} ${
// 							activeCategory === 'featured' ? styles.active : ''
// 						}`}
// 						onClick={() => setActiveCategory('featured')}
// 					>
// 						Featured Products
// 					</button>
// 				</div>
// 				<div className={styles.products}>
// 					{products[activeCategory].map(product => (
// 						<div className={styles.product} key={product.id}>
// 							<h6 className={styles.heart}>
// 								<svg
// 									width='32'
// 									height='32'
// 									viewBox='0 0 32 32'
// 									xmlns='http://www.w3.org/2000/svg'
// 									onClick={() => changeColor(product.id)}
// 									style={{
// 										fill: fillColors[product.id]?.fill || '#f6f6f6',
// 										stroke: fillColors[product.id]?.stroke || '#A8A8A8',
// 									}}
// 								>
// 									<path
// 										d='M5.93415 18.5443L15.3152 27.3569C15.6397 27.6616 15.8019 27.814 15.9999 27.814C16.1979 27.814 16.3602 27.6616 16.6846 27.3569L26.0657 18.5443C28.6739 16.0942 28.9907 12.0622 26.797 9.2348L26.3845 8.70316C23.7603 5.32081 18.4928 5.88806 16.6488 9.75157C16.3883 10.2973 15.6115 10.2973 15.351 9.75157C13.5071 5.88806 8.23955 5.32081 5.61531 8.70316L5.20284 9.2348C3.00918 12.0622 3.32592 16.0942 5.93415 18.5443Z'
// 										strokeOpacity='0.77'
// 										strokeWidth='1.4'
// 									/>
// 								</svg>
// 							</h6>
// 							<div className={styles.img}>
// 								<img src={product.img} alt='productImage' />
// 							</div>
// 							<div className={styles.description}>
// 								<p className={styles.title}>{product.title}</p>
// 								<h2 className={styles.price}>{product.price}</h2>
// 							</div>
// 							<ButtonWidget />
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	)
// }
