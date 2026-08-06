import { motion } from "framer-motion";
import { FiStar, FiPlus } from "react-icons/fi";
import { products } from "../../assets/data";
import styles from "./FeaturedProducts.module.css";

const FeaturedProducts = () => {
  return (
    <section id="products" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="eyebrow">Best Sellers</span>
            <h2 className={styles.title}>Featured Products</h2>
          </div>
          <p className={styles.headerCopy}>
            A tightly-edited range of luggage and carry, chosen for how
            often it actually gets used.
          </p>
        </div>

        <div className={styles.grid}>
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.imageFrame}>
                <img src={product.image} alt={product.name} className={styles.image} />
                <button type="button" className={styles.quickAdd} aria-label={`Add ${product.name} to bag`}>
                  <FiPlus />
                </button>
              </div>
              <div className={styles.info}>
                <div className={styles.infoTop}>
                  <span className={styles.category}>{product.category}</span>
                  <span className={styles.rating}>
                    <FiStar /> {product.rating}
                  </span>
                </div>
                <h3 className={styles.name}>{product.name}</h3>
                <span className={styles.price}>${product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
