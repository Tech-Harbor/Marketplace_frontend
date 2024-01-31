import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import SvgIcon from '@mui/material/SvgIcon';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';

import s from './ProductCardListItem.module.scss';

const ProductCardListItem = ({ name, price, image }) => {
  return (
    <div className={s.prodCardItem}>
      <div className={s.prodCardItem__wrapper}>
        <img className={s.prodCardItem__img} src={image.imageUrl} alt={'product card'} />
      </div>

      <div>
        <p className={s.prodCardItem__description}>{name}</p>
        <p className={s.prodCardItem__price}>{price} ₴</p>
      </div>

      <div className={s.prodCardItem__nav}>
        <NavLink to={''} className={s.prodCardItem__btn}>
          ПЕРЕГЛЯНУТИ
        </NavLink>
        <div>
          <NavLink to={''} className={s.prodCardItem__basket}>
            <SvgIcon sx={{ width: 30, height: 30 }}>
              <ShoppingCartOutlinedIcon />
            </SvgIcon>
          </NavLink>

          <NavLink to={''} className={s.prodCardItem__balance}>
            <SvgIcon sx={{ width: 30, height: 30 }}>
              <BalanceOutlinedIcon />
            </SvgIcon>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

ProductCardListItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.exact({
    id: PropTypes.number,
    imageId: PropTypes.string,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default ProductCardListItem;
