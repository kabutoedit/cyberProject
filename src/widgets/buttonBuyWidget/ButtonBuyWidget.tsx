import React from 'react'
import styles from './style.module.scss'
import { Link } from 'react-router-dom'

interface ButtonProps {
	onClick: () => void
}

const ButtonBuyWidget: React.FC<ButtonProps> = ({ onClick }) => {
	return (
		<Link to='/catalog'>
			<button onClick={onClick} className={styles.btn}>
				Buy now
			</button>
		</Link>
	)
}

export default ButtonBuyWidget
