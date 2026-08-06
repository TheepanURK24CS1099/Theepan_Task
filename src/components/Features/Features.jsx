import { motion } from "framer-motion";
import { FiCloudRain, FiLock, FiShield, FiRefreshCw } from "react-icons/fi";
import { features } from "../../assets/data";
import styles from "./Features.module.css";

const icons = {
  water: FiCloudRain,
  lock: FiLock,
  warranty: FiShield,
  recycled: FiRefreshCw,
};

const Features = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow" style={{ color: "var(--color-sand)" }}>
            Why Stratus
          </span>
          <h2 className={styles.title}>Premium Travel Features</h2>
        </div>

        <div className={styles.grid}>
          {features.map((feature, i) => {
            const Icon = icons[feature.id];
            return (
              <motion.div
                key={feature.id}
                className={styles.card}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className={styles.iconWrap}>
                  <Icon />
                </span>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
