import styles from './ProductCard.module.css';

import PropTypes from 'prop-types';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';

const ProductCard = ({ name, price, image }) => {
  return (
    <div className={styles.product_card}>
      <div className={styles.about_product}>
        <img src={image.imageUrl} alt={image.name} className={styles.img_product} />
        <span className={styles.name_product}>{name}</span>
        <span className={styles.price_product}>{price} ₴</span>
      </div>
      <div className={styles.menu_for_buy}>
        <button className={styles.buy}>КУПИТИ</button>
        <div className={styles.icons}>
          <ShoppingCartOutlinedIcon sx={{ color: '#254499' }} />
          <BalanceOutlinedIcon sx={{ color: '#254499' }} />
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    imageId: PropTypes.string,
  }).isRequired,
};
export default ProductCard;
