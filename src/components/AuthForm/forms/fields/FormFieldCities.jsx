import PropTypes from 'prop-types';
import { StyledFieldName, StyledSelect, StyledTextValidation } from './fields.styled.js';

const options = [
  { value: '', label: '' },
  { value: 'Lviv', label: 'Львів' },
  { value: 'Kyiv', label: 'Київ' },
  { value: 'Kharkiv', label: 'Харків' },
  { value: 'Odessa', label: 'Одеса' },
];

export const FormFieldCities = ({ text, validation, fieldError }) => {
  return (
    <>
      <StyledFieldName>{text}</StyledFieldName>
      <StyledSelect {...validation} $fieldError={fieldError}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>

      {fieldError && <StyledTextValidation role="alert">{fieldError.message}</StyledTextValidation>}
    </>
  );
};

FormFieldCities.propTypes = {
  text: PropTypes.string.isRequired,
  fieldError: PropTypes.object,
  validation: PropTypes.shape({
    required: PropTypes.string,
  }),
};
