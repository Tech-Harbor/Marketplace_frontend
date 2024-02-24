import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ValidationErrors from './ValidateErrors/ValidationErrors.jsx';

import {
  StyledInput,
  StyledFieldName,
  StyledIconOn,
  StyledWrapperButton,
  StyledWrapperFieldPassword,
  StyledIconOff,
  StyledTextValidation,
} from './fields.styled.js';
import { validatePasswordPatterns } from '../../../../utils/validatePasswordPatterns.js';

export const FormFieldPassword = ({ text, validation, fieldError, passwordValue }) => {
  const [toggle, setToggle] = useState(false);
  const [validationPasswordResults, setValidationPasswordResults] = useState({});
  const onClick = e => {
    e?.preventDefault();
    setToggle(!toggle);
  };

  useEffect(() => {
    setValidationPasswordResults(prevStat => validatePasswordPatterns(passwordValue) || prevStat);
  }, [passwordValue]);

  return (
    <>
      <StyledFieldName>{text}</StyledFieldName>
      <StyledWrapperFieldPassword>
        <StyledInput
          type={toggle ? 'text' : 'password'}
          className="password-field"
          {...validation}
          $fieldError={fieldError}
        />
        <StyledWrapperButton onClick={onClick}>
          {toggle && <StyledIconOn />}
          {!toggle && <StyledIconOff />}
        </StyledWrapperButton>
      </StyledWrapperFieldPassword>

      {fieldError && <StyledTextValidation role="alert">{fieldError.message}</StyledTextValidation>}
      {passwordValue && <ValidationErrors validationPasswordResults={validationPasswordResults} />}
    </>
  );
};

FormFieldPassword.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  fieldError: PropTypes.object,
  validation: PropTypes.shape({
    required: PropTypes.string,
  }).isRequired,
  passwordValue: PropTypes.string,
};
