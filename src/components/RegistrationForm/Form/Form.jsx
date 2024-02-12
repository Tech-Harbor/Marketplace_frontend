import { FormField, FormFieldPassword } from './fields/index.js';
import { StyledForm, StyledButton } from './Form.styled';
import RegisterTerms from './RegisterTerms/RegisterTerms.jsx';

export const Form = () => {
  return (
    <StyledForm>
      <FormField name="name" id="name" text="Ім’я" />
      <FormField name="surname" id="surname" text="Прізвище" />
      <FormField name="phone" id="phone" text="Номер телефону" />
      <FormField name="email" id="email" text="Ел. пошта" />
      <FormFieldPassword name="password" id="password" text="Пароль" clsField="password" />
      <RegisterTerms />
      <StyledButton>Зареєструватися</StyledButton>
    </StyledForm>
  );
};
