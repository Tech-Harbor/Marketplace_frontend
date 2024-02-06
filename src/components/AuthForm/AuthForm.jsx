import { useState } from 'react';
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
  const [toggle, setToggle] = useState(true);

  const setIcon = () => {
    setToggle(!toggle);
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
        <SecondButtonOfChoice>Зареєструватися</SecondButtonOfChoice>
      </BlockOfButtons>

      <BlockOfInputs>
        <FormInput name="Електронна пошта" type="text" />
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
          click={setIcon}
        />
      </BlockOfInputs>

      <Forgot>Забули пароль?</Forgot>

      <Button $backgroundcolor="#9E9EB2">Увійти</Button>
    </BlockOfForm>
  );
};

export default AuthForm;
