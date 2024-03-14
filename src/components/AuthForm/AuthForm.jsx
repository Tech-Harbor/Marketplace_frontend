import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import usePostData from '../../hooks/usePostData.js';
import FormInput from '../FormInput/FormInput.jsx';
import Google from '../../../public/Google.png';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button } from '../FormButton/FormButton.styled.js';
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
  const navigate = useNavigate();
  const [toggle, setToggle] = useState({
    toggleType: true,
    toggleCheckbox: false,
    toggleRecovery: true,
  });
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
      navigate('/', { replace: true });
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
    <FormBlock onSubmit={handleSubmit(submit)}>
      <TitleBlock>
        <Title>{toggle.toggleRecovery ? 'Вхід' : 'Відновлення паролю'}</Title>
        <CloseRoundedIcon
          sx={{ fontSize: 24, color: '#33363F', cursor: 'pointer', marginRight: '8px' }}
          onClick={() => navigate('/')}
        />
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
          click={() => setToggle(prevData => ({ ...prevData, toggleType: !toggle.toggleType }))}
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
              setToggle(prevData => ({ ...prevData, toggleCheckbox: !toggle.toggleCheckbox }))
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
        <Forgot onClick={() => setToggle(prevData => ({ ...prevData, toggleRecovery: false }))}>
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
          <Link
            to={toggle.toggleRecovery ? 'register' : '/auth'}
            onClick={() => setToggle(prevData => ({ ...prevData, toggleRecovery: true }))}
          >
            {toggle.toggleRecovery ? 'Створити акаунт' : 'Увійти'}
          </Link>
        </CreateAccount>
      </Account>
      <LogInButton $show={toggle.toggleRecovery}>
        <Image src={Google} alt="Google" />
        <Text>Продовжити через Google</Text>
      </LogInButton>
    </FormBlock>
  );
};

export default AuthForm;
