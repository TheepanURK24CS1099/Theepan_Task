import { FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import styles from "./Footer.module.css";

const columns = [
  {
    title: "Shop",
    links: ["Carry-On", "Weekender", "Backpacks", "Accessories"],
  },
  {
    title: "Company",
    links: ["About", "Journal", "Sustainability", "Careers"],
  },
  {
    title: "Support",
    links: ["Contact", "Shipping", "Warranty", "FAQ"],
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brandCol}>
          <span className={styles.logo}>STRATUS</span>
          <p className={styles.tagline}>
            Premium travel &amp; lifestyle essentials for the modern
            journey.
          </p>
          <div className={styles.social}>
            <a href="#top" aria-label="Instagram" className={styles.socialIcon}>
              <FiInstagram />
            </a>
            <a href="#top" aria-label="Twitter" className={styles.socialIcon}>
              <FiTwitter />
            </a>
            <a href="#top" aria-label="YouTube" className={styles.socialIcon}>
              <FiYoutube />
            </a>
          </div>
        </div>

        <div className={styles.linkCols}>
          {columns.map((col) => (
            <div key={col.title} className={styles.linkCol}>
              <h4 className={styles.colTitle}>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#top">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>&copy; {year} STRATUS BY THEEPAN SS. All rights reserved.</p>
        <p className={styles.disclaimer}>
          A concept storefront — imagery via placehold.co, no live checkout.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
