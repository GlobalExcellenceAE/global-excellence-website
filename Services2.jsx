import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SERVICES } from '../utils/siteData'
import ServiceIcon from '../components/ServiceIcon'
import styles from './Services.module.css'

function ServiceCard({ service, index }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
    >
      <span className={styles.num}>{service.num}</span>
      <div className={styles.icon}>
        <ServiceIcon name={service.icon} />
      </div>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.desc}>{service.desc}</p>
      <div className={styles.bottomLine} />
    </motion.div>
  )
}

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="services" className={styles.section}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-tag">What We Do</div>
        <h2 className="section-title">
          Services Built for<br />Global Impact
        </h2>
        <p className="section-sub">
          From pixel-perfect designs to robust development — everything your digital
          presence needs to dominate the global market.
        </p>
      </motion.div>

      <div className={styles.grid}>
        {SERVICES.map((s, i) => (
          <ServiceCard key={s.num} service={s} index={i} />
        ))}
      </div>
    </section>
  )
}
