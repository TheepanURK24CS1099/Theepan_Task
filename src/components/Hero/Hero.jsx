import { motion } from "framer-motion";
import { FiArrowDownRight, FiArrowRight } from "react-icons/fi";
import { ph } from "../../assets/data";
import styles from "./Hero.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Hero = () => {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <motion.span
            className="eyebrow"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Spring / Summer Collection
          </motion.span>

          <motion.h1
            className={styles.headline}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
          >
            Carry the
            <br />
            journey with you.
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
          >
            Considered luggage and everyday carry, shaped for cities,
            airports and everything between. Built to move as fast as you do.
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
          >
            <a href="#products" className={styles.primaryCta}>
              Shop the Edit <FiArrowRight />
            </a>
            <a href="#collections" className={styles.secondaryCta}>
              Explore Collections <FiArrowDownRight />
            </a>
          </motion.div>
        </div>

        <motion.div
          className={styles.imageWrap}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={ph(1000, 1250, "2C2C2C", "D9C7A4", "Editorial Hero")}
            alt="Editorial travel scene featuring STRATUS luggage"
            className={styles.heroImage}
          />
          <div className={styles.badge}>
            <span className={styles.badgeNum}>24</span>
            <span className={styles.badgeText}>
              Countries
              <br />
              shipped to
            </span>
          </div>
        </motion.div>
      </div>

      <div className={styles.marqueeStrip} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {Array(2)
            .fill(
              "Designed for the journey — Weatherproof — Lifetime Warranty — Editorial Carry —"
            )
            .join(" ")}
        </div>
      </div>
    </section>
  );
};

export default Hero;
