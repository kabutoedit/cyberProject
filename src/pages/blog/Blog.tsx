import React from 'react'
import styles from './style.module.scss'

const Blog = () => {
	const blogPosts = [
		{
			id: 1,
			title: 'Обзор iPhone 15 Pro Max: Стоит ли обновляться?',
			description:
				'Новый титановый корпус, A17 Pro, камера с зумом — разбираем, насколько iPhone 15 Pro Max меняет правила игры.',
			date: '10 апреля 2025',
			image: '/BlogPageImg/iphone15.jpg',
		},
		{
			id: 2,
			title: 'Как выбрать MacBook в 2025 году?',
			description:
				'Air на M3 или Pro на M3 Max? Поможем разобраться, какой MacBook подходит именно вам.',
			date: '2 апреля 2025',
			image: '/BlogPageImg/macbook.jpg',
		},
		{
			id: 3,
			title: 'Apple Watch Ultra 2: Революция в дизайне и функционале',
			description:
				'Что нового в Apple Watch Ultra 2? Протестировали обновления и особенности этого флагманского устройства.',
			date: '5 апреля 2025',
			image: '/BlogPageImg/applewatch.jpg',
		},
	]

	return (
		<div className={styles.blogContainer}>
			<h1 className={styles.blogTitle}>Новости и статьи</h1>
			<div className={styles.blogGrid}>
				{blogPosts.map(post => (
					<div key={post.id} className={styles.blogCard}>
						<img
							src={post.image}
							alt={post.title}
							className={styles.blogCardImage}
						/>
						<div className={styles.blogCardContent}>
							<h2 className={styles.blogCardTitle}>{post.title}</h2>
							<p className={styles.blogCardDescription}>{post.description}</p>
							<p className={styles.blogCardDate}>{post.date}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Blog
