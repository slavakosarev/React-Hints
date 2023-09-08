// @ts-nocheck
import './Info.css'
import styles from './Info.module.css'

// console.log(styles)

function Info() {
	return (
		<div className={styles.info}>
			<h1>Info Component</h1>
			<button className="my-btn">Button into Info</button>
		</div>
	)
}

export default Info
