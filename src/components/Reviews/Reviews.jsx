import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { reviews } from "../../assets/data";
import styles from "./Reviews.module.css";

const Reviews = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">Testimonials</span>
          <h2 className={styles.title}>What Travelers Say</h2>
        </div>

        <div className={styles.grid}>
          {reviews.map((review, i) => (
            <motion.figure
              key={review.id}
              className={styles.card}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <FiStar
                    key={idx}
                    className={idx < review.rating ? styles.starFilled : styles.starEmpty}
                  />
                ))}
              </div>
              <blockquote className={styles.quote}>&ldquo;{review.quote}&rdquo;</blockquote>
              <figcaption className={styles.author}>
                <span className={styles.avatar}>{review.name.charAt(0)}</span>
                <div>
                  <p className={styles.name}>{review.name}</p>
                  <p className={styles.location}>{review.location}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
