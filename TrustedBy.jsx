import { TRUSTED_LOGOS } from '../utils/siteData'
import styles from './TrustedBy.module.css'

export default function TrustedBy() {
  const doubled = [...TRUSTED_LOGOS, ...TRUSTED_LOGOS]

  return (
    <div className={styles.wrap}>
      <p className={styles.label}>Trusted by world-class companies</p>
      <div className={styles.fade}>
        <div className={styles.track}>
          {doubled.map((logo, i) => (
            <span key={i} className={styles.logo}>{logo}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
