import PropTypes from 'prop-types';

import {
  StyledInput,
  StyledLabel,
  StyledIconOn,
  StyledWrapperButton,
  StyledWrapperFieldPassword,
  StyledIconOff,
} from './fields.styled.js';
import { useState } from 'react';

export const FormFieldPassword = ({ name, text, validation, fieldError }) => {
  const [toggle, setToggle] = useState(false);

  const onClick = e => {
    e?.preventDefault(); // prevent form submission from bubbling up
    setToggle(!toggle);
  };

  return (
    <>
      <StyledLabel label={name}>{text}</StyledLabel>

      <StyledWrapperFieldPassword>
        <StyledInput
          type={toggle ? 'text' : 'password'}
          className="password-field"
          {...validation}
          $errors={fieldError}
        />
        <StyledWrapperButton onClick={onClick}>
          {toggle && <StyledIconOn />}
          {!toggle && <StyledIconOff />}
        </StyledWrapperButton>
      </StyledWrapperFieldPassword>
    </>
  );
};

FormFieldPassword.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  fieldError: PropTypes.object.isRequired,
  validation: PropTypes.object.isRequired,
};
