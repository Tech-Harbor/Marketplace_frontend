import PropTypes from 'prop-types';
import { StyledInput, StyledFieldName, StyledTextValidation } from './fields.styled.js';

export const FormField = ({ type, text, validation, fieldError, className }) => {
  return (
    <>
      <StyledFieldName className={className}>{text}</StyledFieldName>
      <StyledInput type={type} {...validation} $fieldError={fieldError} />
      {fieldError && <StyledTextValidation role="alert">{fieldError.message}</StyledTextValidation>}
    </>
  );
};

FormField.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  fieldError: PropTypes.object,
  className: PropTypes.string,
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
