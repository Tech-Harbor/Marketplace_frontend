import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import usePostData from '../../hooks/usePostData.js';
import FormInput from '../FormInput/FormInput.jsx';
import Facebook from '../../../public/Facebook Circled.png';
import Google from '../../../public/Google.png';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button } from '../FormButton/FormButton.styled.js';
import {
  BlockOfForm,
  BlockOfInputs,
  ButtonOfLogIn,
  SecondButtonOfLogIn,
  Image,
  Text,
  HorizontalLine,
  TextLine,
  Forgot,
  BlockOfButtons,
  ButtonOfChoice,
  SecondButtonOfChoice,
} from './AuthForm.styled.js';

const AuthForm = () => {
  const [response, putData] = usePostData();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  useEffect(() => {
    if (response.token) {
      navigate('/');
    }
  });

  const logIn = data => {
    putData('auth/login', {
      email: data.email,
      password: data.password,
    });
  };

  return (
    <BlockOfForm onSubmit={handleSubmit(logIn)} id="form">
      <ButtonOfLogIn>
        <Image src={Facebook} alt="Fasebook" />
        <Text>Продовжити через Facebook</Text>
      </ButtonOfLogIn>

      <SecondButtonOfLogIn>
        <Image src={Google} alt="Google" />
        <Text>Продовжити через Google</Text>
      </SecondButtonOfLogIn>

      <HorizontalLine>
        <TextLine>чи</TextLine>
      </HorizontalLine>

      <BlockOfButtons>
        <ButtonOfChoice>Увійти</ButtonOfChoice>
        <SecondButtonOfChoice>
          <Link to="/register">Зареєструватися</Link>
        </SecondButtonOfChoice>
      </BlockOfButtons>

      <BlockOfInputs>
        <FormInput
          title="Електронна пошта"
          name="email"
          type="email"
          min={7}
          max={'35'}
          register={register}
        />
        <FormInput
          title="Пароль"
          name="password"
          type={toggle ? 'password' : 'email'}
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
        />
      </BlockOfInputs>

      <Forgot>Забули пароль?</Forgot>

      <Button $isValid={isValid} disabled={!isValid} value="Увійти" type="submit" />
    </BlockOfForm>
  );
};

export default AuthForm;
