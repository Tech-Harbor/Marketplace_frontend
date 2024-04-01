import PropTypes from 'prop-types';

import { StyledInput, StyledFieldName, StyledTextValidation } from './fields.styled.js';

export const FormField = ({ type, text, validation, fieldError }) => {
  return (
    <>
      <StyledFieldName>{text}</StyledFieldName>
      <StyledInput type={type} {...validation} $fieldError={fieldError} />
      {fieldError && <StyledTextValidation role="alert">{fieldError.message}</StyledTextValidation>}
    </>
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
