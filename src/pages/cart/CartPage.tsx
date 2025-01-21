import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../app/store/store'
import {
	removeProductFromCart,
	updateProductQuantity,
} from '../../app/store/slice'
import styles from './style.module.scss'
import '../../app/index.css'

const Cart: React.FC = () => {
	const dispatch = useDispatch()
	const { items, totalPrice } = useSelector((state: RootState) => state.cart)

	const handleRemoveItem = (id: number) => {
		dispatch(removeProductFromCart(id))
	}

	const handleUpdateQuantity = (id: number, quantity: number) => {
		dispatch(updateProductQuantity({ id, quantity }))
	}

	return (
		<div className={styles.cartPage}>
			<div className='container'>
				<div className={styles.cartPageContent}>
					<div className={styles.addedProducts}>
						<h3 className={styles.cartTitle}>Shopping Cart</h3>
						<div className={styles.products}>
							{items.map(item => (
								<div key={item.id} className={styles.product}>
									<div className={styles.productImg}>
										<img src={item.img} alt={item.name} />
									</div>
									<p className={styles.productName}>{item.name}</p>
									<div className={styles.btns}>
										<button
											onClick={() =>
												handleUpdateQuantity(item.id, item.quantity - 1)
											}
										>
											-
										</button>
										<span>{item.quantity}</span>
										<button
											onClick={() =>
												handleUpdateQuantity(item.id, item.quantity + 1)
											}
										>
											+
										</button>
									</div>
									<p className={styles.productPrice}>
										${item.price * item.quantity}
									</p>
									<i
										className={styles.delete}
										onClick={() => handleRemoveItem(item.id)}
									>
										<svg
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M18 6L6 18'
												stroke='black'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
											<path
												d='M6 6L18 18'
												stroke='black'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>
									</i>
								</div>
							))}
						</div>
					</div>
					<div className={styles.orderSum}>
						<h4 className={styles.orderSumTitle}>Order Summary</h4>
						<label className={styles.label} htmlFor='input'>
							<p className={styles.inputText}>Discount code / Promo code</p>
							<input
								className={styles.input}
								type='number'
								placeholder='Code'
							/>
						</label>
						<label className={styles.label} htmlFor='input'>
							<p className={styles.inputText}>Your bonus card number</p>
							<input
								className={styles.input}
								type='number'
								placeholder='Enter Card Number'
							/>
							<button className={styles.apply}>Apply</button>
						</label>
						<h5 className={styles.text}>
							Subtotal <p>${totalPrice}</p>
						</h5>
						<div className={styles.additionsToThePrice}>
							<h5 className={`${styles.text} ${styles.grayText}`}>
								Estimated Tax <p>${totalPrice > 0 ? 50 : totalPrice}</p>
							</h5>
							<h5 className={`${styles.text} ${styles.grayText}`}>
								Estimated shipping & Handling{' '}
								<p>${totalPrice > 0 ? 29 : totalPrice}</p>
							</h5>
						</div>
						<h5 className={styles.text}>
							Total <p>${totalPrice > 0 ? totalPrice + 50 + 29 : totalPrice}</p>
						</h5>
						<button className={styles.btn}>Checkout</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart
