import styles from './ProductCard.module.css';

import PropTypes from 'prop-types';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';

const ProductCard = (props) => {

  return (
    <div className={styles.product_card}>
      <div className={styles.about_product}>
        <img src={props.image.imageUrl} alt={props.image.name} className={styles.img_product} />
        <span className={styles.name_product}>{props.name}</span>
        <span className={styles.price_product}>{props.price} ₴</span>
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

ProductCard.prototype={
  name: PropTypes.string,
  price: ProductCard.number,
  image: PropTypes.object,
};
export default ProductCard;
