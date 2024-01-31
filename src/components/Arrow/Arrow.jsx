import PropTypes from 'prop-types';
import s from './Arrow.module.scss';

export const Arrow = props => {
  const { className, style, onClick, type = 'prev' } = props;

  return (
    <div
      className={`${className} ${type === 'prev' ? s.prev__arrow : s.next__arrow} ${
        type === 'prev' ? s.custom__prev__arrow : s.custom__next__arrow
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
