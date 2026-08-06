import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { collections } from "../../assets/data";
import styles from "./Collections.module.css";

const Collections = () => {
  return (
    <section id="collections" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Curated Ranges</span>
          <h2 className={styles.title}>Travel Collections</h2>
        </div>

        <div className={styles.grid}>
          {collections.map((item, i) => (
            <motion.a
              href="#products"
              key={item.id}
              className={`${styles.card} ${
                item.span === "large" ? styles.cardLarge : styles.cardSmall
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.imageFrame}>
                <img src={item.image} alt={item.title} className={styles.image} />
              </div>
              <div className={styles.cardFooter}>
                <div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>
                <span className={styles.cardArrow}>
                  <FiArrowUpRight />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
