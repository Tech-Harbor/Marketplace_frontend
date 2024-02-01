import Fasebook from '../../../public/Facebook Circled.png';
import Google from '../../../public/Google.png';
import { BlockOfForm, BlockOfShortLog, BlockOfInputs, Button, Image, Text } from './Auth.style.js';

const Auth = () => {
  return (
    <>
      <BlockOfForm>
        <BlockOfShortLog>
          <Button>
            <Image src={Fasebook} alt="Fasebook" />
            <Text>Продовжити через Fasebook</Text>
          </Button>
          <Button>
            <Image src={Google} alt="Google" />
            <Text>Продовжити через Google</Text>
          </Button>
        </BlockOfShortLog>
        <BlockOfInputs></BlockOfInputs>
      </BlockOfForm>
    </>
  );
};

export default Auth;
