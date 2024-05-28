import { useId } from 'react';
import PropTypes from 'prop-types';
import { InputWrapper, StyledInput, StyledLabel } from './Input.styled.js';

const Input = ({ label, validation, ...rest }) => {
  const id = useId();

  return (
    <InputWrapper {...rest}>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput id={id} {...validation} {...rest} />
    </InputWrapper>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  validation: PropTypes.shape({
    required: PropTypes.string,
  }).isRequired,
};

export default Input;
