import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ValidateErrors from './ValidateErrors/ValidateErrors.jsx';

import {
  StyledInput,
  StyledLabel,
  StyledIconOn,
  StyledWrapperButton,
  StyledWrapperFieldPassword,
  StyledIconOff,
  StyledTextValidation,
} from './fields.styled.js';
import { validatePassword } from '../../../../utils/validatePassword.js';

export const FormFieldPassword = ({ name, text, validation, fieldError, passwordValue }) => {
  const [toggle, setToggle] = useState(false);
  const [validationPasswordResults, setValidationPasswordResults] = useState({});
  const onClick = e => {
    e?.preventDefault();
    setToggle(!toggle);
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
      {passwordValue && <ValidateErrors validationPasswordResults={validationPasswordResults} />}
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
