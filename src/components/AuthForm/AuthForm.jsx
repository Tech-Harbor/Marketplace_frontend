import { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useGoogleLogin } from '@react-oauth/google';
import usePostData from '../../hooks/usePostData.js';
import FormInput from '../FormInput/FormInput.jsx';
import { takeToken } from '../../redux/auth/tokenSlice.js';
import { changeShowMode } from '../../redux/auth/modalSlice.js';
import Google from '../../../public/Google.png';
import Greetings from '../../assets/imges/Greetings.png';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Notification from '../Notification/Notification.jsx';
import { Button } from '../FormButton/FormButton.styled.js';
import { RegistrationForm } from '../RegistrationForm/index.js';
import {
  FormBlock,
  TitleBlock,
  Title,
  InputsBlock,
  Errors,
  ChoiceBlock,
  RememberBlock,
  Check,
  SwitchOff,
  SwitchOn,
  RememberText,
  Forgot,
  Account,
  CreateAccount,
  SwitchButton,
  DividingLine,
  LineText,
  LogInButton,
  Image,
  Text,
} from './AuthForm.styled.js';

const AuthForm = () => {
  const [response, postData] = usePostData();

  const [toggle, setToggle] = useState({
    toggleType: true,
    toggleRecovery: true,
    toggleCheckbox: false,
    toggleRegistration: false,
  });

  const [registerMode, setRegisterMode] = useState(false);
  const [message, setMessage] = useState(false);
  const [accessErrors, setAccessErrors] = useState('');

  const isMountingRef = useRef(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid, errors },
  } = useForm({ mode: 'onChange' });

  const Email = watch('email');

  const dispatch = useDispatch();

  const saveToken = () => {
    if (response.errors?.message) {
      setAccessErrors(response.errors?.message);
      return;
    }
    if (toggle.toggleRecovery) {
      dispatch(takeToken(response.answer.data?.accessToken));
      if (toggle.toggleCheckbox) {
        localStorage.setItem('tokens', JSON.stringify(response.answer.data));
      } else {
        localStorage.setItem('refreshToken', response.answer.data?.refreshToken);
      }
    }
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
      dispatch(changeShowMode(false));
    }, 8000);
  };

  useEffect(() => {
    setAccessErrors('');
  }, [toggle.toggleRecovery]);

  useEffect(() => {
    isMountingRef.current = true;
  }, []);

  useEffect(() => {
    if (!isMountingRef.current) {
      return saveToken();
    } else {
      isMountingRef.current = false;
    }
  }, [response]);

  const login = useGoogleLogin({
    onSuccess: codeResponse => {
      console.log(codeResponse);
      postData('https://orangergoogle.onrender.com/oauth/login', codeResponse);
    },
    onError: errorResponse => setAccessErrors(errorResponse.error_description),
  });

  const submit = data => {
    if (toggle.toggleRecovery) {
      postData('auth/login', {
        email: data.email,
        password: data.password,
      });
    } else {
      postData('auth/request/email', {
        email: data.email,
      });
    }
  };

  return (
    <>
      {message ? (
        <Notification
          title="Вітаємо!"
          text={`Для підтвердження реєстрації, ми надіслали Вам листа на ${Email}`}
          icon={Greetings}
        />
      ) : (
        <>
          {/* It will be shows instead Login form when "registerMode" is true */}
          {registerMode && <RegistrationForm setRegisterMode={setRegisterMode} />}

          {!registerMode && (
            <FormBlock onSubmit={handleSubmit(submit)}>
              <TitleBlock>
                <Title>{toggle.toggleRecovery ? 'Вхід' : 'Відновлення паролю'}</Title>
              </TitleBlock>

              <InputsBlock>
                <FormInput
                  title="Електронна пошта"
                  name="email"
                  type="email"
                  min={7}
                  register={register}
                  errors={errors?.email}
                  changeInput={() =>
                    setToggle(prevState => ({ ...prevState, toggleRegistration: false }))
                  }
                />
                <FormInput
                  title="Пароль"
                  name="password"
                  type={toggle.toggleType ? 'password' : 'text'}
                  icon={
                    toggle.toggleType ? (
                      <VisibilityOffIcon sx={{ fontSize: 24, color: '#4A5568' }} />
                    ) : (
                      <VisibilityIcon sx={{ fontSize: 24, color: '#4A5568' }} />
                    )
                  }
                  min={7}
                  clickIcon={() =>
                    setToggle(prevState => ({ ...prevState, toggleType: !toggle.toggleType }))
                  }
                  register={register}
                  errors={errors?.password}
                  showItem={toggle.toggleRecovery}
                  changeInput={() =>
                    setToggle(prevState => ({ ...prevState, toggleRegistration: false }))
                  }
                />
              </InputsBlock>

              {accessErrors && <Errors>{accessErrors}</Errors>}

              <ChoiceBlock $show={toggle.toggleRecovery}>
                <RememberBlock>
                  <Check
                    type="checkbox"
                    onChange={() =>
                      setToggle(prevState => ({
                        ...prevState,
                        toggleCheckbox: !toggle.toggleCheckbox,
                      }))
                    }
                  />
                  {toggle.toggleCheckbox ? (
                    <SwitchOn>
                      <DoneRoundedIcon sx={{ fontSize: 16, color: '#fff' }} />
                    </SwitchOn>
                  ) : (
                    <SwitchOff />
                  )}
                  <RememberText>Запам’ятати мене</RememberText>
                </RememberBlock>
                <Forgot
                  onClick={() => setToggle(prevState => ({ ...prevState, toggleRecovery: false }))}
                >
                  Забули пароль?
                </Forgot>
              </ChoiceBlock>

              <Button
                $isValid={isValid}
                disabled={!isValid}
                type="submit"
                style={{ marginTop: `${toggle.toggleRecovery ? '' : '24px'}` }}
              >
                {toggle.toggleRecovery ? 'Увійти' : 'Відправити лист'}
              </Button>

              <Account $size={toggle.toggleRecovery}>
                {toggle.toggleRecovery ? 'Немає акаунту? ' : 'Згадали пароль? '}
                <CreateAccount>
                  {/*<Link to="register">Створити акаунт</Link>*/}
                  {/* It is a button which changes from a login mode to a register mode instead the link */}
                  {toggle.toggleRecovery ? (
                    <SwitchButton onClick={() => setRegisterMode(true)}>
                      Створити акаунт
                    </SwitchButton>
                  ) : (
                    <SwitchButton
                      onClick={() =>
                        setToggle(prevState => ({ ...prevState, toggleRecovery: true }))
                      }
                      style={{ cursor: 'pointer' }}
                    >
                      Увійти
                    </SwitchButton>
                  )}
                </CreateAccount>
              </Account>

              <DividingLine $show={toggle.toggleRecovery}>
                <LineText>або</LineText>
              </DividingLine>

              <LogInButton $show={toggle.toggleRecovery} onClick={login}>
                <Image src={Google} alt="Google" />
                <Text>Продовжити через Google</Text>
              </LogInButton>
            </FormBlock>
          )}
        </>
      )}
    </>
  );
};

export default AuthForm;
