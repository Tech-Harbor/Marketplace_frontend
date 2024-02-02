// import { StyledForm } from './Form.styled';
import { FormField } from '../Fields/FormField';
import { StyledForm, StyledButton, StyledText } from './Form.styled';

export const Form = props => {
  return (
    <StyledForm {...props}>
      <FormField name="name" id="name" text="Ваше ім’я" />
      <FormField name="surname" id="surname" text="Ваше прізвище" />
      <FormField name="login" id="login" text="Введіть електронну пошту чи номер телефону" />

      <FormField
        name="password"
        id="password"
        text="Пароль"
        clsLabel="password"
        clsInput="icon-place"
      />
      <FormField
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
