import PropTypes from 'prop-types';

import { StyledInput, StyledLabel, StyledTextValidation } from './fields.styled.js';

export const FormField = ({ name, type, text, validation, fieldError }) => {
  return (
    <div style={{ position: 'relative' }}>
      <StyledLabel label={name}>{text}</StyledLabel>
      <StyledInput type={type} {...validation} $fieldError={fieldError} />
      {fieldError && <StyledTextValidation role="alert">{fieldError.message}</StyledTextValidation>}
    </div>
  );
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  fieldError: PropTypes.object,
  validation: PropTypes.shape({
    required: PropTypes.string,
    minLength: PropTypes.shape({
      value: PropTypes.number,
      message: PropTypes.string,
    }),
    maxLength: PropTypes.shape({
      value: PropTypes.number,
      message: PropTypes.string,
    }),
  }).isRequired,
};
