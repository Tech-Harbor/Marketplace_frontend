import PropTypes from 'prop-types';
import { StyledLink } from './LinkTo.styled.js';

const LinkTo = ({ to, title, className }) => {
  return (
    <StyledLink to={to} className={className}>
      {title}
    </StyledLink>
  );
};

LinkTo.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LinkTo;
