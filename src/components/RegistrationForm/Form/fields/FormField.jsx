import PropTypes from 'prop-types';

import { StyledInput, StyledLabel } from './fields.styled.js';

export const FormField = ({ name, type, text, validation, fieldError }) => {
  return (
    <div>
      <StyledLabel label={name}>{text}</StyledLabel>

      <StyledInput type={type} {...validation} $errors={fieldError} />
    </div>
  );
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  fieldError: PropTypes.object.isRequired,
  validation: PropTypes.object.isRequired,
};
