import { RegistrationForm } from '../forms/RegistrationForm.jsx';
import { AuthTextLink } from '../AuthTextLink/AuthTextLink.jsx';

import { StyledTitle } from './typeForms.styled.js';
import { PAGE } from '../../../constants/constants.js';

export const Registration = () => {
  return (
    <>
      {/*<FormWrapper>*/}
      <StyledTitle>Реєстрація</StyledTitle>
      <RegistrationForm />
      <AuthTextLink text={'Вже маєте акаунт?'} linkText={'Увійти'} linkTo={PAGE.LOGIN} />
      {/*</FormWrapper>*/}
    </>
  );
};
