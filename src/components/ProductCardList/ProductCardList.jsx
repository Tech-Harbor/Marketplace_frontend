import ProductCardListItem from '../ProductCardListItem/ProductCardListItem';

import styles from './ProductCardList.module.css';

const ProductCardList = ({ db }) => {
  return (
    <div className={styles.productCardList}>
      {db.map(({ id, discription, price, image }) => (
        <ProductCardListItem
          key={id}
          id={id}
          discription={discription}
          price={price}
          image={image}
        />
      ))}
    </div>
  );
};

export default ProductCardList;
