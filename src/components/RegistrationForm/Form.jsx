import styled from 'styled-components';
import Button from './Button';
import { Text } from './Title';
import device from './MediaQueries';

const Form = props => {
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

export default Form;

const StyledForm = styled.form`
  width: 100%;
  min-height: 100%;
`;

const StyledLabel = styled.label`
  display: block;

  margin-top: ${props => props.marginTop || '21px'};

  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;

  @media ${device.laptopL} {
    margin-top: 43px;

    font-size: 16px;
    line-height: 19.36px;
  }
`;

const StyledLabelPassword = styled(StyledLabel)`
  margin-top: 42px;

  @media ${device.laptopL} {
    margin-top: 52px;
  }
`;

const StyledLabelRepeatPassword = styled(StyledLabel)`
  margin-top: 17px;
`;

const StyledInput = styled.input.attrs({ type: 'text', required: true, autocomplete: true })`
  margin-top: ${props => props.marginTop || '10px'};
  padding: 12px 19px;

  width: 100%;
  height: 45px;

  border: none;
  border-radius: 10px;
  background-color: #dadada;

  &:focus-visible {
    outline: none;
  }

  @media ${device.laptopL} {
    padding: 18px 36px;

    height: 66px;
  }
`;
