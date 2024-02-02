// import { StyledForm } from './Form.styled';
import { FormField, FormFieldPassword } from '../Fields/FormField';
import { StyledForm, StyledButton, StyledText } from './Form.styled';

export const Form = () => {
  return (
    <StyledForm>
      <FormField name="name" id="name" text="Ваше ім’я" />
      <FormField name="surname" id="surname" text="Ваше прізвище" />
      <FormField name="login" id="login" text="Введіть електронну пошту чи номер телефону" />

      <FormFieldPassword
        name="password"
        id="password"
        text="Пароль"
        clsLabel="password"
        clsInput="icon-place"
      />

      <FormFieldPassword
        name="repeat-password"
        id="repeat-password"
        text="Повторіть пароль"
        clsLabel="repeat-password"
        clsInput="icon-place"
      />

      <StyledButton>
        <StyledText>Зареєструватися</StyledText>
      </StyledButton>
    </StyledForm>
  );
};
