import PropTypes from 'prop-types';

import { StyledFlexDiv } from '../RegistrationForm.styled';
import {StyledIconForInput, StyledInput, StyledLabel, StyledWrapperButton} from './FormField.styled';

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
      />
    </>
  );
};

export const FormFieldPassword = ({ name, id, text, clsField }) => {
  return (
    <>
      <StyledLabel label={name} id={id} className={`icon-place ${clsField}`}>
        {text}
      </StyledLabel>

      <StyledFlexDiv $position="relative">
        <StyledInput
          name={name}
          id={id}
          className={`icon-place ${clsField}`}
          // value={repeat-password}
          // onChange={e => setPassword(e.target.value)}
        />

        <StyledWrapperButton>
          <StyledIconForInput />
        </StyledWrapperButton>
      </StyledFlexDiv>
    </>
  );
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  clsField: PropTypes.string,
};

FormFieldPassword.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  clsField: PropTypes.string,
};
