import PropTypes from 'prop-types';
import { RegistrationForm } from './forms/RegistrationForm.jsx';
import TitleHaveAccount from './TitleHaveAccount/TitleHaveAccount.jsx';

import { StyledTitle, FormWrapper } from './common.styled.js';

export const Registration = ({ setModeModal }) => {
  return (
    <FormWrapper>
      <StyledTitle>Реєстрація</StyledTitle>
      <RegistrationForm />
      <TitleHaveAccount setModeModal={setModeModal} />
    </FormWrapper>
  );
};

Registration.propTypes = {
  setModeModal: PropTypes.func.isRequired,
};
