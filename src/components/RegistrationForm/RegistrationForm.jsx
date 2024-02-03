import { Form } from './Form/Form';

import { StyledTitle, FormWrapper } from './RegistrationForm.styled';

export const RegistrationForm = () => {
  return (
    <FormWrapper>
      <StyledTitle>Реєстрація</StyledTitle>
      <Form />
    </FormWrapper>
  );
};
