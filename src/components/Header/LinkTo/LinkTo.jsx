import PropTypes from 'prop-types';
import { StyledLinkTo } from './LinkTo.styled.js';

const LinkTo = ({ to, linkText }) => {
  return <StyledLinkTo to={to}>{linkText}</StyledLinkTo>;
};

LinkTo.propTypes = {
  to: PropTypes.string.isRequired,
  linkText: PropTypes.string,
};

export default LinkTo;
