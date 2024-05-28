import { forwardRef, useId } from 'react';
import { InputWrapper, StyledInput, StyledLabel } from './Input.styled.js';
import PropTypes from 'prop-types';

const Input = forwardRef(({ label, className, ...rest }, ref) => {
  const id = useId();

  return (
    <InputWrapper className={className}>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput {...rest} id={id} ref={ref} />
    </InputWrapper>
  );
});

Input.displayName = 'Input'; // TODO рішення помилки: при виконанні "git commit" отримав наступну помилку "Component definition is missing display name  react/display-name"

Input.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Input;
