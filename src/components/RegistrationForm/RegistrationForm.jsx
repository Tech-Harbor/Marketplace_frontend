import { Form } from './Form/Form';
import { FlexDiv } from './FlexDiv/FlexDiv';
import { Title } from './Title_Text/Title_Text';

import { Wrapper } from './RegistrationForm.styled';

export const RegistrationForm = () => {
  return (
    <Wrapper>
      <FlexDiv justify="center" direction="column" align="center">
        <Title>Реєстрація</Title>

        <Form />
      </FlexDiv>
    </Wrapper>
  );
};
