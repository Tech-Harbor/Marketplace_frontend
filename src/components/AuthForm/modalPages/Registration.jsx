import { RegistrationForm } from '../forms/RegistrationForm.jsx';
import TitleHaveAccount from '../TitleHaveAccount/TitleHaveAccount.jsx';

import { StyledTitle, FormWrapper } from './modalPages.styled.js';

export const Registration = () => {
  return (
    <FormWrapper>
      <StyledTitle>Реєстрація</StyledTitle>
      <RegistrationForm />
      <TitleHaveAccount />
    </FormWrapper>
  );
};
