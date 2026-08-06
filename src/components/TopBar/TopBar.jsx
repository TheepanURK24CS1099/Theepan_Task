import { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { FiTruck } from "react-icons/fi";
import styles from "./TopBar.module.css";

const messages = [
  "Complimentary shipping on orders over $150",
  "Lifetime warranty on all hardware",
  "Now shipping to 24 countries",
];

const TopBar = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className={styles.topBar}>
      <div className={styles.inner}>
        <FiTruck aria-hidden="true" className={styles.icon} />
        <p className={styles.marquee}>{messages.join("   /   ")}</p>
        <button
          type="button"
          className={styles.close}
          aria-label="Dismiss announcement"
          onClick={() => setVisible(false)}
        >
          <HiOutlineX />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
