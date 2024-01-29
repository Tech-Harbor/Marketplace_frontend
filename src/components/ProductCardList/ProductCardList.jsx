import PropTypes from 'prop-types';
import ProductCardListItem from '../ProductCardListItem/ProductCardListItem';

import styles from './ProductCardList.module.scss';

const ProductCardList = ({ db }) => {
  return (
    <div className={styles.productCardList}>
      {db.map(({ id, description, price, image }) => (
        <ProductCardListItem
          key={id}
          id={id}
          description={description}
          price={price}
          image={image}
        />
      ))}
    </div>
  );
};

ProductCardList.propTypes = {
  db: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    })
  ),
};

export default ProductCardList;
