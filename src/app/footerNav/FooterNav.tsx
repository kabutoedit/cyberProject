import { NavLink } from 'react-router-dom'
import React from 'react'
import styles from './style.module.scss'

export default function FooterNav() {
	return (
		<nav className={styles.footerNav}>
			<div className={styles.links}>
				<p className={styles.footerTxt}>Services</p>
				<ul className={styles.navList}>
					<li>
						<NavLink className={styles.link} to='/bonusProgram'>
							Bonus Program
						</NavLink>
					</li>
					<li>
						<NavLink className={styles.link} to='/giftCards'>
							Gift Cards
						</NavLink>
					</li>
					<li>
						<NavLink className={styles.link} to='/creditAndPayment'>
							Credit and payment
						</NavLink>
					</li>
					<li>
						<NavLink className={styles.link} to='/serviceContracts'>
							Service contracts
						</NavLink>
					</li>
					<li>
						<NavLink className={styles.link} to='/nonCashAccount'>
							Non-cash account
						</NavLink>
					</li>
					<li>
						<NavLink className={styles.link} to='/payment'>
							Payment
						</NavLink>
					</li>
				</ul>
			</div>
			<div className={styles.links}>
				<p className={styles.footerTxt}>Assistance to the buyer</p>
				<ul className={styles.navList}>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? `${styles.link} ${styles.active}` : styles.link
							}
							to='/findAnOrder'
						>
							Find an order
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? `${styles.link} ${styles.active}` : styles.link
							}
							to='/termsOfDelivery'
						>
							Terms of delivery
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? `${styles.link} ${styles.active}` : styles.link
							}
							to='/exchangeAndReturnOfGoods'
						>
							Exchange and return of goods
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? `${styles.link} ${styles.active}` : styles.link
							}
							to='/guarantee'
						>
							Guarantee
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? `${styles.link} ${styles.active}` : styles.link
							}
							to='/frequentlyAskedQuestions'
						>
							Frequently asked questions
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? `${styles.link} ${styles.active}` : styles.link
							}
							to='/termsOfUseOfTheSite'
						>
							Terms of use of the site
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}
