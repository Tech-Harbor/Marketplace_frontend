import PropTypes from 'prop-types';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

import { StyledFlexDiv } from '../RegistrationForm.styled';
import { StyledInput, StyledLabel, StyledWrapperButton } from './FormField.styled';

export const FormField = ({ name, id, text, clsLabel, clsInput }) => {
  return (
    <>
      <StyledLabel label={name} id={id} className={clsLabel}>
        {text}
      </StyledLabel>

      {(name === 'name' || name === 'surname' || name === 'login') && (
        <StyledInput
          name={name}
          id={name}
          // value={name}
          // onChange={e => setName(e.target.value)}
        ></StyledInput>
      )}

      {(name === 'password' || name === 'repeat-password') && (
        <StyledFlexDiv position="relative">
          <StyledInput
            name={name}
            id={id}
            className={clsInput}
            // value={repeat-password}
            // onChange={e => setPassword(e.target.value)}
          ></StyledInput>

          <StyledWrapperButton>
            <VisibilityOutlinedIcon />
          </StyledWrapperButton>
        </StyledFlexDiv>
      )}
    </>
  );
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  clsLabel: PropTypes.string,
  clsInput: PropTypes.string,
};

StyledLabel.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired, // for props {text}
};
