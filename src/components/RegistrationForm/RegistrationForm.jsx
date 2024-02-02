import { Form } from './Form/Form';

import { StyledFlexDiv, StyledTitle, Wrapper } from './RegistrationForm.styled';

export const RegistrationForm = () => {
  return (
    <Wrapper>
      <StyledFlexDiv $justify="center" $direction="column" $align="center">
        <StyledTitle>Реєстрація</StyledTitle>

        <Form />
      </StyledFlexDiv>
    </Wrapper>
  );
};
