import { motion } from "framer-motion";
import { ph } from "../../assets/data";
import styles from "./BrandStory.module.css";

const stats = [
  { value: "2016", label: "Founded" },
  { value: "24", label: "Countries" },
  { value: "100%", label: "Recycled Shells" },
];

const BrandStory = () => {
  return (
    <section id="story" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <motion.div
          className={styles.imageWrap}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={ph(900, 1100, "43534B", "FFFFFF", "Studio Craft")}
            alt="STRATUS design studio"
            className={styles.imageMain}
          />
          <img
            src={ph(500, 500, "D9C7A4", "111111", "Detail")}
            alt="Hardware detail on a STRATUS bag"
            className={styles.imageDetail}
          />
        </motion.div>

        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Our Story</span>
          <h2 className={styles.title}>Designed slow, built to move fast.</h2>
          <p className={styles.paragraph}>
            STRATUS began with a simple frustration: travel gear that
            couldn&apos;t decide whether it belonged in a studio or a
            suitcase. We set out to build one line that works for both —
            considered materials, restrained detailing, and construction
            that holds up to years of transit.
          </p>
          <p className={styles.paragraph}>
            Every silhouette is developed in-house and tested across real
            itineraries before it ships. Nothing leaves the studio unless
            it earns its place in your bag.
          </p>

          <div className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;
