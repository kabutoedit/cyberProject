import React from 'react'
import { Link } from 'react-router-dom'
import '../../app/index.css'
import styles from './style.module.scss'

const NotFoundPage = () => {
	return (
		<div className={styles.notFoundPage}>
			<div className='container'>
				<div className={styles.notFoundPageContent}>
					<h1 className={styles.header}>404 - Страница не найдена</h1>
					<p>
						Кажется, вы заблудились. Вернитесь на{' '}
						<Link to='/'>главную страницу</Link>.
					</p>
				</div>
			</div>
		</div>
	)
}

export default NotFoundPage
