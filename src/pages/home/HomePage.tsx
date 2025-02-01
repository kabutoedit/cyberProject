import React from 'react'
import ProductsWidget from '../../widgets/productsWidget/ProductsWidget'
import CategoryWidget from '../../widgets/categoryWidget/CategoryWidget'
import BannersWidget from '../../widgets/bannersWidget/BannersWidget'
import DiscountProductsWidget from '../../widgets/discountProductsWidget/DiscountProductsWidget'
import BigBannerWidget from '../../widgets/bigBannerWidget/bigBannerWidget'
import PopularProductsWidget from '../../widgets/popularProductsWidget/PopularProductsWidget'

interface Product {
	id: number
	imageUrl: string
	title: string
	price: number
	category: string
}

interface HomePageProps {
	productsData: Product[]
}

const HomePage: React.FC<HomePageProps> = ({ productsData }) => {
	return (
		<>
			<ProductsWidget />
			<CategoryWidget />
			<PopularProductsWidget productsData={productsData} />
			<BannersWidget />
			<DiscountProductsWidget productsData={productsData} />
			<BigBannerWidget />
		</>
	)
}

export default HomePage
