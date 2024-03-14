import PropTypes from 'prop-types';
import { Form } from './Form/Form';
import TitleHaveAccount from './TitleHaveAccount/TitleHaveAccount.jsx';

import { StyledTitle, FormWrapper } from './RegistrationForm.styled';

export const RegistrationForm = ({ setRegisterMode }) => {
  return (
    <FormWrapper>
      <StyledTitle>Реєстрація</StyledTitle>
      <Form />
      <TitleHaveAccount setRegisterMode={setRegisterMode} />
    </FormWrapper>
  );
};

RegistrationForm.propTypes = {
  setRegisterMode: PropTypes.func.isRequired,
};
