import { Form } from './Form/Form';
import { Flex } from './Flex/Flex';
import { Title } from './Title_Text/Title_Text';

import { Wrapper } from './RegistrationForm.styled';

export const RegistrationForm = () => {
  return (
    <Wrapper>
      <Flex justify="center" direction="column" align="center">
        <Title>Реєстрація</Title>
        <Form />
      </Flex>
    </Wrapper>
  );
};
