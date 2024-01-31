import styled from 'styled-components';

const StyledForm = styled.form`
  /* color: var(--color-bg-form); */
  /* background-color: #fff; */
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
`;

const StyledInput = styled.input`
  width: 328px;
  height: 45px;

  padding: 8px, 24px, 8px, 24px;

  border: none;
  border-radius: 10px;
  background-color: #dadada;
`;

const Form = props => {
  return (
    <StyledForm {...props}>
      <StyledLabel label="name" id="name" marginTop="0">
        Ваше ім’я
      </StyledLabel>
      <StyledInput
        name="name"
        type="text"
        id="name"
        // value={name}
        // onChange={e => setName(e.target.value)}
        required
        autocomplete
      ></StyledInput>

      <StyledLabel label="surname" id="surname">
        Ваше прізвище
      </StyledLabel>
      <StyledInput
        name="surname"
        type="text"
        id="surname"
        // value={surname}
        // onChange={e => setSurname(e.target.value)}
        required
        autocomplete
      ></StyledInput>

      <StyledLabel label="login" id="login">
        Введіть електронну пошту чи номер телефону
      </StyledLabel>
      <StyledInput
        name="login"
        type="text"
        id="login"
        // value={login}
        // onChange={e => setLogin(e.target.value)}
        required
        autocomplete
      ></StyledInput>

      <StyledLabel label="login" id="login">
        Введіть електронну пошту чи номер телефону
      </StyledLabel>
      <StyledInput
        name="login"
        type="text"
        id="login"
        // value={login}
        // onChange={e => setLogin(e.target.value)}
        required
        autocomplete
      ></StyledInput>

      <StyledLabel label="password" id="password">
        Пароль
      </StyledLabel>
      <StyledInput
        name="password"
        type="text"
        id="password"
        // value={password}
        // onChange={e => setPassword(e.target.value)}
        required
        autocomplete
      ></StyledInput>

      <StyledLabel label="repeatPassword" id="repeatPassword">
        Пароль
      </StyledLabel>
      <StyledInput
        name="repeatPassword"
        type="text"
        id="repeatPassword"
        // value={repeatPassword}
        // onChange={e => setRepeatPassword(e.target.value)}
        required
        autocomplete
      ></StyledInput>
    </StyledForm>
  );
};

export default Form;
