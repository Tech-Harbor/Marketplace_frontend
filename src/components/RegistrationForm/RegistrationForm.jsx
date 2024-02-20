import { Form } from './Form/Form';
import TitleHaveAccount from './TitleHaveAccount/TitleHaveAccount.jsx';

import { StyledTitle, FormWrapper } from './RegistrationForm.styled';

export const RegistrationForm = () => {
  return (
    <FormWrapper>
      <StyledTitle>Реєстрація</StyledTitle>
      <Form />
      <TitleHaveAccount />
    </FormWrapper>
  );
};
