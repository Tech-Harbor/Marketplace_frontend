import { useState } from 'react';
import PropTypes from 'prop-types';

import { checkPasswordOverPatterns } from '../../../../utils';
import { ErrorsList } from './ErrorsList/ErrorsList.jsx';
import {
  StyledInput,
  StyledFieldName,
  StyledIconOn,
  StyledWrapperButton,
  StyledWrapperFieldPassword,
  StyledIconOff,
  StyledTextValidation,
} from './fields.styled.js';

export const FormFieldPassword = ({
  text,
  validation,
  fieldError,
  passwordValue,
  repeatPasswordValue,
  ...rest
}) => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const onClick = e => {
    e.preventDefault();
    setIsToggleOn(prevState => !prevState);
  };

  const errorMessageList = checkPasswordOverPatterns(passwordValue, repeatPasswordValue);

  return (
    <>
      <StyledFieldName {...rest}>{text}</StyledFieldName>
      <StyledWrapperFieldPassword>
        <StyledInput
          type={isToggleOn ? 'text' : 'password'}
          className="password-field"
          {...validation}
          $fieldError={fieldError}
        />
        <StyledWrapperButton onClick={onClick}>
          {isToggleOn && <StyledIconOn />}
          {!isToggleOn && <StyledIconOff />}
        </StyledWrapperButton>
      </StyledWrapperFieldPassword>

      {fieldError && <StyledTextValidation role="alert">{fieldError.message}</StyledTextValidation>}
      {passwordValue && <ErrorsList errorMessageList={errorMessageList} />}
    </>
  );
};

FormFieldPassword.propTypes = {
  text: PropTypes.string.isRequired,
  fieldError: PropTypes.object,
  validation: PropTypes.shape({
    required: PropTypes.string,
  }).isRequired,
  passwordValue: PropTypes.string,
  repeatPasswordValue: PropTypes.string,
};
