import PropTypes from 'prop-types';

import { StyledInput, StyledLabel } from './fields.styled.js';

export const FormField = ({ name, type, text, validation, fieldError }) => {
  return (
    <div>
      <StyledLabel label={name}>{text}</StyledLabel>

      <StyledInput
        type={type}
        {...validation}
        // $fieldError={fieldError}
        style={{ borderColor: fieldError ? 'red' : 'var(--color-border-input)' }}
      />
    </div>
  );
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  validation: PropTypes.object.isRequired,
  fieldError: PropTypes.object,
};
