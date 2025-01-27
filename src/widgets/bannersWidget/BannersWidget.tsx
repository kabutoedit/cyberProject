import React from 'react'
import styles from './style.module.scss'
import ButtonWidget from '../buttonWidget/ButtonWidget'

export default function BannersWidget() {
	interface Banner {
		id: number
		img: string
		title: string
		text: string
	}

	const banners: Banner[] = [
		{
			id: 1,
			img: '/bannersWidget/firstBanner.png',
			title: 'Popular Products',
			text: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
		},
		{
			id: 2,
			img: '/bannersWidget/secondBanner.png',
			title: 'Ipad Pro',
			text: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
		},
		{
			id: 3,
			img: '/bannersWidget/thirdBanner.png',
			title: 'Samsung Galaxy',
			text: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
		},
		{
			id: 4,
			img: '/bannersWidget/fourthBanner.png',
			title: 'Macbook Pro',
			text: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
		},
	]

	return (
		<section className={styles.bannersWidget}>
			{banners.map(banner => (
				<div
					key={banner.id}
					className={`${styles.banner} ${styles[`banner${banner.id}`]}`}
				>
					<div
						className={styles.bannerImg}
						style={{ backgroundImage: `url(${banner.img})` }}
					></div>
					<div className={styles.bannerIn}>
						<h3 className={styles.bannerTitle}>{banner.title}</h3>
						<p className={styles.bannerText}>{banner.text}</p>
						<ButtonWidget />
					</div>
				</div>
			))}
		</section>
	)
}
