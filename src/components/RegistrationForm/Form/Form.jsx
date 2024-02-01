import { Button } from '../Button/Button';
import { StyledForm } from './Form.styled';
import { Text } from '../Title_Text/Title_Text';
import {
  StyledInput,
  StyledLabel,
  StyledLabelPassword,
  StyledLabelRepeatPassword,
} from '../Input_Label/Input_Label';

export const Form = props => {
  return (
    <StyledForm {...props}>
      <StyledLabel label="name" id="name">
        Ваше ім’я
      </StyledLabel>
      <StyledInput
        name="name"
        id="name"
        // value={name}
        // onChange={e => setName(e.target.value)}
      ></StyledInput>

      <StyledLabel label="surname" id="surname">
        Ваше прізвище
      </StyledLabel>
      <StyledInput
        name="surname"
        id="surname"
        // value={surname}
        // onChange={e => setSurname(e.target.value)}
      ></StyledInput>

      <StyledLabel label="login" id="login">
        Введіть електронну пошту чи номер телефону
      </StyledLabel>
      <StyledInput
        name="login"
        id="login"
        // value={login}
        // onChange={e => setLogin(e.target.value)}
      ></StyledInput>

      <StyledLabelPassword label="password" id="password">
        Пароль
      </StyledLabelPassword>
      <StyledInput
        name="password"
        id="password"
        // value={password}
        // onChange={e => setPassword(e.target.value)}
      ></StyledInput>

      <StyledLabelRepeatPassword label="repeatPassword" id="repeatPassword">
        Повторіть пароль
      </StyledLabelRepeatPassword>
      <StyledInput
        name="repeatPassword"
        id="repeatPassword"
        // value={repeatPassword}
        // onChange={e => setRepeatPassword(e.target.value)}
      ></StyledInput>

      <Button>
        <Text>Зареєструватися</Text>
      </Button>
    </StyledForm>
  );
};
