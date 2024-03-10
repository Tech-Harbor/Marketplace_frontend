import PropTypes from 'prop-types';

import {
  StyledInput,
  StyledFieldName,
  StyledTextValidation,
  StyledWrapperFieldPhone,
  StyledIconPlus,
} from './fields.styled.js';

export const FormFieldPhone = ({ type, text, validation, fieldError }) => {
  return (
    <>
      <StyledFieldName>{text}</StyledFieldName>
      <StyledWrapperFieldPhone>
        <StyledInput type={type} {...validation} $fieldError={fieldError} className="phone-field" />
        <StyledIconPlus />
      </StyledWrapperFieldPhone>

      {fieldError && <StyledTextValidation role="alert">{fieldError.message}</StyledTextValidation>}
    </>
  );
};

FormFieldPhone.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  fieldError: PropTypes.object,
  validation: PropTypes.shape({
    required: PropTypes.string,
  }).isRequired,
};
