import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
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

  const [toggle, setToggle] = useState({
    toggleType: true,
    toggleRecovery: true,
    toggleCheckbox: false,
  });
  const [registerMode, setRegisterMode] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ mode: 'onChange' });

  useEffect(() => {
    if (response.token) {
      if (toggle.toggleCheckbox) {
        localStorage.setItem('token', response.token);
      } else {
        sessionStorage.setItem('token', response.token);
      }
    }
  });

  const submit = data => {
    if (toggle.toggleRecovery) {
      putData('auth/login', {
        email: data.email,
        password: data.password,
      });
    } else {
      putData('auth/request/email', {
        email: data.email,
      });
    }
  };

  return (
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
              max={'35'}
              register={register}
              errors={errors?.email}
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
              max={'20'}
              click={() =>
                setToggle(prevState => ({ ...prevState, toggleType: !toggle.toggleType }))
              }
              register={register}
              errors={errors?.password}
              showItem={toggle.toggleRecovery}
            />
          </InputsBlock>

          <ChoiceBlock $show={toggle.toggleRecovery}>
            <RememberBlock>
              <Check
                type="checkbox"
                onChange={() =>
                  setToggle(prevState => ({ ...prevState, toggleCheckbox: !toggle.toggleCheckbox }))
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
                <button onClick={() => setRegisterMode(true)}>Створити акаунт</button>
              ) : (
                <a onClick={() => setToggle(prevState => ({ ...prevState, toggleRecovery: true }))}>
                  Увійти
                </a>
              )}
            </CreateAccount>
          </Account>

          <LogInButton $show={toggle.toggleRecovery}>
            <Image src={Google} alt="Google" />
            <Text>Продовжити через Google</Text>
          </LogInButton>
        </FormBlock>
      )}
    </>
  );
};

export default AuthForm;
