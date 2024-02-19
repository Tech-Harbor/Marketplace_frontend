import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ValidatePasswordBox from './ValidatePasswordBox/ValidatePasswordBox.jsx';

import {
  StyledInput,
  StyledLabel,
  StyledIconOn,
  StyledWrapperButton,
  StyledWrapperFieldPassword,
  StyledIconOff,
  StyledTextValidation,
} from './fields.styled.js';

export const FormFieldPassword = ({ name, text, validation, fieldError, watch }) => {
  const passwordValue = watch('password');
  const [toggle, setToggle] = useState(false);
  const [validationPasswordResults, setValidationPasswordResults] = useState({});
  const onClick = e => {
    e?.preventDefault();
    setToggle(!toggle);
  };
  const validatePassword = (password = '') => {
    const validationResult = {};
    validationResult['Тільки латинські літери'] = /^[a-zA-Z0-9]+$/.test(password);
    validationResult['Містити великі та малі літери'] = /^(?=.*[a-z])(?=.*[A-Z])/.test(password);
    validationResult['Містити цифри'] = /\d/.test(password);
    validationResult['Не менше 8 символів'] = password.length >= 8;
    return validationResult;
  };

  useEffect(() => {
    setValidationPasswordResults(prevStat => validatePassword(passwordValue) || prevStat);
  }, [passwordValue]);

  return (
    <>
      <StyledLabel label={name}>{text}</StyledLabel>
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
      {passwordValue && (
        <ValidatePasswordBox validationPasswordResults={validationPasswordResults} />
      )}
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
  watch: PropTypes.func.isRequired,
};
