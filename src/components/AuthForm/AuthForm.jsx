import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import usePostData from '../../hooks/usePostData.js';
import FormInput from '../FormInput/FormInput.jsx';
import Facebook from '../../../public/Facebook Circled.png';
import Google from '../../../public/Google.png';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
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
import { Button } from '../FormButton/FormButton.styled.js';

const AuthForm = () => {
  const [response, putData] = usePostData();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);
  const [data, setData] = useState({
    password: '',
    email: '',
  });
  const [checkButton, setCheckButton] = useState(true);

  const minEmail = 7;
  const minPassword = 10;

  useEffect(() => {
    if (data.email.length >= minEmail && data.password.length >= minPassword) {
      setCheckButton(false);
      return;
    }
    setCheckButton(true);
  }, [data]);

  useEffect(() => {
    if (response.token) {
      navigate('/');
    }
  });

  const logIn = () => {
    putData('auth/login', {
      email: data.email,
      password: data.password,
    });
  };

  return (
    <BlockOfForm>
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
          type="text"
          min={minEmail}
          max="35"
          inputValue={email => setData(prevData => ({ ...prevData, email: email }))}
        />
        <FormInput
          title="Пароль"
          name="password"
          type={toggle ? 'password' : 'text'}
          icon={
            toggle ? (
              <VisibilityOffIcon sx={{ fontSize: 24 }} />
            ) : (
              <VisibilityIcon sx={{ fontSize: 24 }} />
            )
          }
          min={minPassword}
          max="20"
          click={() => {
            setToggle(!toggle);
          }}
          inputValue={pas => setData(prevData => ({ ...prevData, password: pas }))}
        />
      </BlockOfInputs>

      <Forgot>Забули пароль?</Forgot>

      <Button $disabledStyles="#9E9EB2" onClick={logIn} disabled={checkButton}>
        Увійти
      </Button>
    </BlockOfForm>
  );
};

export default AuthForm;
