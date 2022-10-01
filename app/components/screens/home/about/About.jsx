import { APP_URL } from './../../../../constants';
import EmailButton from './email-button/EmailButton';
import Description from './description/Description';
import Image from 'next/image'

import styles from './About.module.scss'

const About = ({ me }) => {
  return (
    <div className={styles.me}>
      <div className={styles['image-wrapper']}>
        <Image
          src={`${APP_URL}${me.avatar}`}
          width={190}
          height={190}
          className={styles.image}
          alt={me.siteName}
          quality={100}
        />
      </div>
      <div className={styles.heading}>
        <span>Якушин Вадим</span>
        <Image
          src={`${APP_URL}/icons/verified.svg`}
          alt=''
          height={16}
          width={16}
        />
      </div>
      <EmailButton />
      <Description description={me.description} />
    </div>
  )
}

export default About