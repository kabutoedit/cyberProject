import React from 'react'
import ProductsWidget from '../../widgets/productsWidget/ProductsWidget'
import CategoryWidget from '../../widgets/categoryWidget/CategoryWidget'
import PopularProductsWidget from '../../widgets/popularProductsWidget/PopularProductsWidget'
import BannersWidget from '../../widgets/bannersWidget/BannersWidget'
import DiscountProductsWidget from '../../widgets/discountProductsWidget/DiscountProductsWidget'
import BigBannerWidget from '../../widgets/bigBannerWidget/bigBannerWidget'

export default function HomePage() {
	return (
		<>
			<ProductsWidget />
			<CategoryWidget />
			<PopularProductsWidget />
			<BannersWidget />
			<DiscountProductsWidget />
			<BigBannerWidget />
		</>
	)
}
