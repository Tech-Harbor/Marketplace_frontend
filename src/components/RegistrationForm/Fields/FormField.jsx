import PropTypes from 'prop-types';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

import { StyledFlexDiv } from '../RegistrationForm.styled';
import { StyledInput, StyledLabel, StyledWrapperButton } from './FormField.styled';

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
      <StyledLabel label={name} id={id} className={clsField}>
        {text}
      </StyledLabel>

      <StyledFlexDiv $position="relative">
        <StyledInput
          name={name}
          id={id}
          className={clsField}
          // value={repeat-password}
          // onChange={e => setPassword(e.target.value)}
        />

        <StyledWrapperButton>
          <VisibilityOutlinedIcon style={{ color: 'var(--color-primary)' }} />
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
