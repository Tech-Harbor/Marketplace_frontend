import PropTypes from 'prop-types';
import { StyledButton } from './ButtonSubmitForm.styled.js';

const ButtonSubmitForm = ({ title, ...rest }) => {
  return <StyledButton {...rest}>{title}</StyledButton>;
};

ButtonSubmitForm.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ButtonSubmitForm;
