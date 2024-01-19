import styles from './ProductCard.module.css';

import TestGoods from '../../assets/imges/TestGoods.png';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';

const ProductCard = (props) => {

  return (
    <div className={styles.product_card}>
      <div className={styles.about_product}>
        <img src={TestGoods} alt="product" className={styles.img_product} />
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
export default ProductCard;
