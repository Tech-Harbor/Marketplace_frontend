import { NavLink, useLocation } from 'react-router-dom';
import styles from './CardListItem.module.css';
import PropTypes from 'prop-types';

const CardListItem = ({ name, image, path }) => {
  const { pathname } = useLocation();

  return (
    <>
      <NavLink to={`${pathname}/${path}`} className={styles.card}>
        <div className={styles.card__containerFirst}>
          <img className={styles.card__image} src={image} />
        </div>

        <div className={styles.card__containerSecond}>
          <p className={styles.card__title}>{name}</p>
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
