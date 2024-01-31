import PropTypes from 'prop-types';
import ProductCardListItem from '../ProductCardListItem/ProductCardListItem';

import s from './ProductCardList.module.scss';

const ProductCardList = ({ data }) => {
  return (
    <ul className={s.productCardList}>
      {data.map(({ id, name, price, image }) => (
        <li key={id}>
          <ProductCardListItem name={name} price={price} image={image[0]} />
        </li>
      ))}
    </ul>
  );
};

ProductCardList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.number,
          imageId: PropTypes.string,
          imageUrl: PropTypes.string,
          name: PropTypes.string,
        })
      ),
    })
  ).isRequired,
};

export default ProductCardList;
