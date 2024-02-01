import { Button } from '../Button/Button';
import { StyledForm } from './Form.styled';
import { Text } from '../Title_Text/Title_Text';

import { FormField, FormFieldPassword } from '../Fields/FormField';

export const Form = props => {
  return (
    <StyledForm {...props}>
      <FormField name="name" id="name" text="Ваше ім’я" />
      <FormField name="surname" id="surname" text="Ваше прізвище" />
      <FormField name="login" id="login" text="Введіть електронну пошту чи номер телефону" />

      <FormFieldPassword name="password" id="password" text="Пароль" />
      <FormFieldPassword name="repeatPassword" id="repeatPassword" text="Повторіть пароль" />

      <Button>
        <Text>Зареєструватися</Text>
      </Button>
    </StyledForm>
  );
};
