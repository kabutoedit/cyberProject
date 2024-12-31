import React from 'react'
import styles from './style.module.scss'
import '../../app/index.css'
import ButtonWidget from '../buttonWidget/ButtonWidget'

export default function ProductsWidget() {
	return (
		<section className={styles.productsWidget}>
			<div className={styles.content}>
				<div className={styles.iphone}>
					<div className='container'>
						<div className={styles.iphoneIn}>
							<div className={styles.description}>
								<p>Pro.Beyond.</p>
								<h2 className={styles.iphoneText}>
									IPhone 14 <h2 className={styles.pro}> Pro</h2>
								</h2>
								<p className={styles.iphoneTxt}>
									Created to change everything for the better. For everyone
								</p>
								<ButtonWidget />
							</div>
							<div className={styles.iphoneImg}></div>
						</div>
					</div>
				</div>
				<div className={styles.anotherProducts}>
					<div className={styles.products}>
						<div className={styles.playStation}>
							<div className={styles.playStationImg}></div>
							<div className={styles.playStationIn}>
								<h3 className={styles.playStationText}>Playstation 5</h3>
								<p className={styles.playStationTxt}>
									Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
									will redefine your PlayStation experience.
								</p>
							</div>
						</div>
						<div className={styles.appleProduct}>
							<div className={styles.appleProductImg}></div>
							<div className={styles.appleProductIn}>
								<h3 className={styles.appleProductText}>
									Apple AirPods <h3 className={styles.bold}>Max</h3>
								</h3>
								<p className={styles.appleProductTxt}>
									Computational audio. Listen, it's powerful
								</p>
							</div>
						</div>
						<div className={`${styles.appleProduct} ${styles.appleProduct2}`}>
							<div className={styles.appleProductImg}></div>
							<div className={styles.appleProductIn}>
								<h3 className={styles.appleProductText}>
									Apple <br /> Vision <h3 className={styles.bold}>Pro</h3>
								</h3>
								<p className={styles.appleProductTxt}>
									An immersive way to experience entertainment
								</p>
							</div>
						</div>
					</div>
					<div className={styles.macBook}>
						<div className={styles.macBookIn}>
							<h4 className={styles.macBookText}>
								Macbook <h4 className={styles.bold}>Air</h4>
							</h4>
							<p className={styles.macBookTxt}>
								The new 15‑inch MacBook Air makes room for more of what you love
								with a spacious Liquid Retina display.
							</p>
							<ButtonWidget />
						</div>
						<div className={styles.macBookImg}></div>
					</div>
				</div>
			</div>
		</section>
	)
}
