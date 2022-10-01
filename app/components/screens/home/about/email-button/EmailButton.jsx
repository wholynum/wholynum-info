import Image from 'next/image'
import { APP_URL } from './../../../../../constants';

import styles from './EmailButton.module.scss'

const EmailButton = () => {
	return <div className={styles.button}>
		<a 
			href="mailto:wholynum@ya.ru"
			target="_blank"
			rel="noreferrer"
			title="wholynum@ya.ru"
		>
			<span>
				<Image
					src={`${APP_URL}/icons/email.svg`}
					alt='email'
					height={26}
					width={26}
				/>
			</span>
			<span>Тут моя почта</span>
		</a>
	</div>
}

export default EmailButton