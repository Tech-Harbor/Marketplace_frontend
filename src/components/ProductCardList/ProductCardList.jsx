import ProductCardListItem from '../ProductCardListItem/ProductCardListItem';

import styles from './ProductCardList.module.css';

const ProductCardList = ({ db }) => {
  return (
    <div className={styles.productCardList}>
      {db.map(({ id, description_product, price }) => (
        <ProductCardListItem
          key={id}
          id={id}
          description_product={description_product}
          price={price}
        />
      ))}
    </div>
  );
};

export default ProductCardList;
