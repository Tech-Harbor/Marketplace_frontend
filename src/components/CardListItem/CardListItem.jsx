import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import s from './CardListItem.module.scss';

const CardListItem = ({ name, image, path }) => {
  const { pathname } = useLocation();

  return (
    <>
      <NavLink to={`${pathname}/${path}`} className={s.card}>
        <div className={s.card__containerFirst}>
          <img className={s.card__image} src={image} alt={'card'} />
        </div>

        <div className={s.card__containerSecond}>
          <p className={s.card__title}>{name}</p>
        </div>
      </NavLink>
    </>
  );
};

CardListItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default CardListItem;
