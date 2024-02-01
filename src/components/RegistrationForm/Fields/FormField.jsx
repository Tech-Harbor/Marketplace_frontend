import PropTypes from 'prop-types';

import {
  StyledInput,
  StyledInputIcon,
  StyledLabel,
  StyledLabelPassword,
  StyledLabelRepeatPassword,
} from './FormField.styled';
import { FlexDiv } from '../FlexDiv/FlexDiv';
import { PasswordVisibilityIcon } from '../Button/PasswordIcon';

export const FormField = ({ name, id, text }) => {
  return (
    <>
      <StyledLabel label={name} id={id}>
        {text}
      </StyledLabel>

      <StyledInput
        name={name}
        id={name}
        // value={name}
        // onChange={e => setName(e.target.value)}
      ></StyledInput>
    </>
  );
};

export const FormFieldPassword = ({ name, id, text }) => {
  return (
    <>
      {name === 'password' && (
        <StyledLabelPassword label={name} id={id}>
          {text}
        </StyledLabelPassword>
      )}

      {name === 'repeatPassword' && (
        <StyledLabelRepeatPassword label={name} id={id}>
          {text}
        </StyledLabelRepeatPassword>
      )}

      <FlexDiv position="relative">
        <StyledInputIcon
          name={name}
          id={id}
          // value={password}
          // onChange={e => setPassword(e.target.value)}
        ></StyledInputIcon>

        <PasswordVisibilityIcon />
      </FlexDiv>
    </>
  );
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

FormFieldPassword.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

StyledLabel.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired, // for props {text}
};
