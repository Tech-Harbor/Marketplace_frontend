import CardListItem from '../CardListItem/CardListItem';
import PropTypes from 'prop-types';

import styles from './CardList.module.css';

const CardList = ({ data }) => {
  return (
    <div className={styles.cardList}>
      {data.map(({ id, name, image, path }) => (
        <CardListItem key={id} id={id} name={name} image={image} path={path} />
      ))}
    </div>
  );
};

CardList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
};

export default CardList;
