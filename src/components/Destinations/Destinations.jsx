import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { destinations } from "../../assets/data";
import styles from "./Destinations.module.css";

const Destinations = () => {
  return (
    <section id="destinations" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Journal</span>
          <h2 className={styles.title}>Destination Inspiration</h2>
        </div>

        <div className={styles.scroller}>
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.id}
              className={`${styles.card} ${i % 2 === 1 ? styles.cardOffset : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.imageFrame}>
                <img src={dest.image} alt={dest.name} className={styles.image} />
              </div>
              <div className={styles.meta}>
                <span className={styles.tag}>{dest.tag}</span>
                <h3 className={styles.name}>
                  <FiMapPin /> {dest.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
