// import { StyledForm } from './Form.styled';
import { FormField, FormFieldPassword } from '../Fields/FormField';
import { StyledForm, StyledButton, StyledText } from './Form.styled';

export const Form = props => {
  return (
    <StyledForm {...props}>
      <FormField name="name" id="name" text="Ваше ім’я" />
      <FormField name="surname" id="surname" text="Ваше прізвище" />
      <FormField name="login" id="login" text="Введіть електронну пошту чи номер телефону" />

      <FormFieldPassword name="password" id="password" text="Пароль" class_psw="password" />
      <FormFieldPassword
        name="repeatPassword"
        id="repeatPassword"
        text="Повторіть пароль"
        class_psw="password-repeat"
      />

      <StyledButton>
        <StyledText>Зареєструватися</StyledText>
      </StyledButton>
    </StyledForm>
  );
};
