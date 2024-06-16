import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled.js';

const Button = ({ title, ...rest }) => {
  return <StyledButton {...rest}>{title}</StyledButton>;
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
