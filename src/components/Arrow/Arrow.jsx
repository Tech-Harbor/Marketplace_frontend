import PropTypes from 'prop-types';
import styles from './Arrow.module.css';

export const Arrow = props => {
  const { className, style, onClick, type = 'prev' } = props;

  return (
    <div
      className={`${className} ${type === 'prev' ? styles.prev__arrow : styles.next__arrow} ${
        type === 'prev' ? styles.custom__prev__arrow : styles.custom__next__arrow
      }`}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={onClick}
    />
  );
};

Arrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
