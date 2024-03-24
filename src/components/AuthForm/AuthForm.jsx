import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import usePostData from '../../hooks/usePostData.js';
import FormInput from '../FormInput/FormInput.jsx';
import Google from '../../../public/Google.png';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button } from '../FormButton/FormButton.styled.js';
import { RegistrationForm } from '../RegistrationForm/index.js';
import {
  FormBlock,
  TitleBlock,
  Title,
  InputsBlock,
  ChoiceBlock,
  RememberBlock,
  Check,
  SwitchOff,
  SwitchOn,
  RememberText,
  Forgot,
  Account,
  CreateAccount,
  LogInButton,
  Image,
  Text,
} from './AuthForm.styled.js';

const AuthForm = () => {
  const [response, putData] = usePostData();
  const [toggle, setToggle] = useState(true);
  const [check, setCheck] = useState(false);
  const [registerMode, setRegisterMode] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ mode: 'onChange' });

  const navigate = useNavigate();

  useEffect(() => {
    if (response.token) {
      if (check) {
        localStorage.setItem('token', response.token);
      } else {
        sessionStorage.setItem('token', response.token);
      }
    }
  });

  const logIn = data => {
    putData('auth/login', {
      email: data.email,
      password: data.password,
    });
  };

  return (
    <>
      {/* It will be shows instead Login form when "registerMode" is true */}
      {registerMode && <RegistrationForm setRegisterMode={setRegisterMode} />}

      {!registerMode && (
        <FormBlock onSubmit={handleSubmit(logIn)}>
          <TitleBlock>
            <Title>Вхід</Title>
          </TitleBlock>

          <InputsBlock>
            <FormInput
              title="Електронна пошта"
              name="email"
              type="email"
              min={7}
              max={'35'}
              register={register}
              errors={errors?.email}
            />
            <FormInput
              title="Пароль"
              name="password"
              type={toggle ? 'password' : 'text'}
              icon={
                toggle ? (
                  <VisibilityOffIcon sx={{ fontSize: 24, color: '#4A5568' }} />
                ) : (
                  <VisibilityIcon sx={{ fontSize: 24, color: '#4A5568' }} />
                )
              }
              min={7}
              max={'20'}
              click={() => setToggle(!toggle)}
              register={register}
              errors={errors?.password}
            />
          </InputsBlock>

          <ChoiceBlock>
            <RememberBlock>
              <Check type="checkbox" onChange={() => setCheck(!check)} />
              {check ? (
                <SwitchOn>
                  <DoneRoundedIcon sx={{ fontSize: 16, color: '#fff' }} />
                </SwitchOn>
              ) : (
                <SwitchOff />
              )}
              <RememberText>Запам’ятати мене</RememberText>
            </RememberBlock>
            <Forgot>Забули пароль?</Forgot>
          </ChoiceBlock>

          <Button $isValid={isValid} disabled={isValid} type="submit">
            Увійти
          </Button>

          <Account>
            Немає акаунту?{' '}
            <CreateAccount>
              {/*<Link to="register">Створити акаунт</Link>*/}
              {/* It is a button which changes from a login mode to a register mode instead the link */}
              <button onClick={() => setRegisterMode(true)}>Створити акаунт</button>
            </CreateAccount>
          </Account>

          <LogInButton
            onClick={() => navigate('https://api.oranger.store/login/oauth2/code/google')}
          >
            <Image src={Google} alt="Google" />
            <Text>Продовжити через Google</Text>
          </LogInButton>
        </FormBlock>
      )}
    </>
  );
};

export default AuthForm;
