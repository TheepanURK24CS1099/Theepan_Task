import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";
import styles from "./Navbar.module.css";

const links = [
  { label: "Collections", href: "#collections" },
  { label: "Shop", href: "#products" },
  { label: "Journal", href: "#destinations" },
  { label: "About", href: "#story" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <button
          type="button"
          className={styles.menuToggle}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>

        <a href="#top" className={styles.logo}>
          STRATUS
        </a>

        <nav className={styles.links}>
          {links.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <button type="button" className={styles.iconBtn} aria-label="Search">
            <FiSearch />
          </button>
          <button type="button" className={styles.iconBtn} aria-label="Account">
            <FiUser />
          </button>
          <button type="button" className={styles.iconBtn} aria-label="Bag">
            <FiShoppingBag />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className={styles.mobileMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className={styles.mobileList}>
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={handleLinkClick}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
