import React from 'react'
import ProductsWidget from '../../widgets/productsWidget/ProductsWidget'
import CategoryWidget from '../../widgets/categoryWidget/CategoryWidget'
import BannersWidget from '../../widgets/bannersWidget/BannersWidget'
import DiscountProductsWidget from '../../widgets/discountProductsWidget/DiscountProductsWidget'
import BigBannerWidget from '../../widgets/bigBannerWidget/bigBannerWidget'
import PopularProductsWidget from '../../widgets/popularProductsWidget/PopularProductsWidget'

export default function HomePage() {
	interface Product {
		id: number
		img: string
		title: string
		price: string
		category: string
	}

	const productsData: Product[] = [
		{
			id: 1,
			img: 'src/pages/home/img/iphone14pro.png',
			title: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
			price: '$1437',
			category: 'Phones',
		},
		{
			id: 2,
			img: 'src/pages/home/img/airPodsMax.png',
			title: 'AirPods Max Silver Starlight Aluminium',
			price: '$549',
			category: 'Headphones',
		},
		{
			id: 3,
			img: 'src/pages/home/img/appleWatch.png',
			title: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium ',
			price: '$399',
			category: 'Watches',
		},
		{
			id: 4,
			img: 'src/pages/home/img/iphone14proSilver.png',
			title: 'Apple iPhone 14 Pro 1TB Gold (MQ2V3)',
			price: '$1499',
			category: 'Phones',
		},
		{
			id: 5,
			img: 'src/pages/home/img/cinemaCamera.png',
			title: 'Blackmagic Pocket Cinema Camera 6k',
			price: '$2535',
			category: 'Cameras',
		},
		{
			id: 6,
			img: 'src/pages/home/img/samsungWatch.png',
			title: 'Samsung Galaxy Watch6 Classic 47mm Black',
			price: '$369',
			category: 'Watches',
		},
		{
			id: 7,
			img: 'src/pages/home/img/zFold5.png',
			title: 'Galaxy Z Fold5 Unlocked | 256GB | Phantom Black',
			price: '$1799',
			category: 'Phones',
		},
		{
			id: 8,
			img: 'src/pages/home/img/galaxyBuds.png',
			title: 'Galaxy Buds FE Graphite',
			price: '$99.99',
			category: 'Headphones',
		},
		{
			id: 9,
			img: 'src/pages/home/img/ipad.png',
			title: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
			price: '$398',
			category: 'Phones',
		},
		{
			id: 10,
			img: 'src/pages/home/img/macbookAir.png',
			title: 'Apple MacBook Air M2 13.6" 256GB Midnight',
			price: '$1199',
			category: 'Computers',
		},
		{
			id: 11,
			img: 'src/pages/home/img/xboxSeriesX.png',
			title: 'Xbox Series X 1TB Console Black',
			price: '$499',
			category: 'Gaming',
		},
		{
			id: 12,
			img: 'src/pages/home/img/ps5.png',
			title: 'Sony PlayStation 5 Digital Edition 825GB',
			price: '$449',
			category: 'Gaming',
		},
		{
			id: 13,
			img: 'src/pages/home/img/appleWatchUltra.png',
			title: 'Apple Watch Ultra 2 GPS + Cellular 49mm Titanium Case',
			price: '$799',
			category: 'Watches',
		},
		{
			id: 14,
			img: 'src/pages/home/img/sonyCamera.png',
			title: 'Sony Alpha a7 IV Full Frame Mirrorless Camera',
			price: '$2499',
			category: 'Cameras',
		},
		{
			id: 15,
			img: 'src/pages/home/img/nintendoSwitch.png',
			title: 'Nintendo Switch OLED Model White Joy-Con',
			price: '$349',
			category: 'Gaming',
		},
		{
			id: 16,
			img: 'src/pages/home/img/sonyHeadphones.png',
			title: 'Sony WH-1000XM5 Wireless Noise-Canceling Headphones',
			price: '$399',
			category: 'Headphones',
		},
		{
			id: 17,
			img: 'src/pages/home/img/steamDeck.png',
			title: 'Valve Steam Deck 512GB Handheld Gaming Console',
			price: '$649',
			category: 'Gaming',
		},
		{
			id: 18,
			img: 'src/pages/home/img/fitbitTracker.png',
			title: 'Fitbit Charge 6 Fitness Tracker with Heart Rate Monitoring',
			price: '$129',
			category: 'Watches',
		},
		{
			id: 19,
			img: 'src/pages/home/img/canonCamera.png',
			title: 'Canon EOS R5 Full Frame Mirrorless Camera',
			price: '$3899',
			category: 'Cameras',
		},
		{
			id: 20,
			img: 'src/pages/home/img/nikonCamera.png',
			title: 'Nikon Z6 II FX Mirrorless Camera',
			price: '$1999',
			category: 'Cameras',
		},
		{
			id: 21,
			img: 'src/pages/home/img/boseQuietComfort.png',
			title: 'Bose QuietComfort 45 Wireless Headphones',
			price: '$329',
			category: 'Headphones',
		},
		{
			id: 22,
			img: 'src/pages/home/img/dellXPS.png',
			title: 'Dell XPS 15 9520 Laptop 15.6" UHD+ Touch, Intel i9',
			price: '$2799',
			category: 'Computers',
		},
		{
			id: 23,
			img: 'src/pages/home/img/hpSpectre.png',
			title: 'HP Spectre x360 14" 2-in-1 Laptop, Intel i7',
			price: '$1499',
			category: 'Computers',
		},
		{
			id: 24,
			img: 'src/pages/home/img/lenovoThinkPad.png',
			title: 'Lenovo ThinkPad X1 Carbon Gen 11, Intel i7',
			price: '$1699',
			category: 'Computers',
		},
	]

	return (
		<>
			<ProductsWidget />
			<CategoryWidget />
			<PopularProductsWidget products={productsData} />
			<BannersWidget />
			<DiscountProductsWidget products={productsData} />
			<BigBannerWidget />
		</>
	)
}
