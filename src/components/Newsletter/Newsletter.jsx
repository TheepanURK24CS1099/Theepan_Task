import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow" style={{ color: "var(--color-sand)" }}>
            Join the List
          </span>
          <h2 className={styles.title}>
            Get early access to new arrivals &amp; travel edits.
          </h2>
          <p className={styles.sub}>
            One considered email a month. No noise, just new drops and
            packing notes from the studio.
          </p>

          {submitted ? (
            <p className={styles.success}>
              <FiCheck /> You&apos;re on the list — welcome to STRATUS.
            </p>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                aria-label="Email address"
              />
              <button type="submit" className={styles.submit}>
                Subscribe <FiArrowRight />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
