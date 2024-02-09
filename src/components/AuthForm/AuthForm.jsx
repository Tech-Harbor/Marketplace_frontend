import { useEffect, useState } from 'react';
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
import { Link } from 'react-router-dom';

const AuthForm = () => {
  const [toggle, setToggle] = useState(true);
  const [data, setData] = useState({
    password: '',
    email: '',
  });
  const [color, setColor] = useState('#9E9EB2');

  const setIcon = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (data.email.includes('@') && data.email.length >= 7 && data.password.length >= 10) {
      setColor('#17317B');
      return;
    }
    setColor('#9E9EB2');
  }, [data]);

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
          name="Електронна пошта"
          type="text"
          min="7"
          max="35"
          inputValue={email => setData(prevData => ({ ...prevData, email: email }))}
        />
        <FormInput
          name="Пароль"
          type={toggle ? 'password' : 'text'}
          icon={
            toggle ? (
              <VisibilityOffIcon sx={{ fontSize: 24 }} />
            ) : (
              <VisibilityIcon sx={{ fontSize: 24 }} />
            )
          }
          min="10"
          max="20"
          click={setIcon}
          inputValue={pas => setData(prevData => ({ ...prevData, password: pas }))}
        />
      </BlockOfInputs>

      <Forgot>Забули пароль?</Forgot>

      <Button $backgroundcolor={color}>Увійти</Button>
    </BlockOfForm>
  );
};

export default AuthForm;
