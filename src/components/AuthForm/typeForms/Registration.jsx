import { RegistrationForm } from '../forms/RegistrationForm.jsx';
import { AuthTextLink } from '../AuthTextLink/AuthTextLink.jsx';

import { StyledTitle } from './typeForms.styled.js';
import { TYPE_FORM } from '../../../constants/constants.js';

export const Registration = () => {
  return (
    <>
      {/*<FormWrapper>*/}
      <StyledTitle>Реєстрація</StyledTitle>
      <RegistrationForm />
      <AuthTextLink text={'Вже маєте акаунт?'} linkText={'Увійти'} linkTo={TYPE_FORM.LOGIN} />
      {/*</FormWrapper>*/}
    </>
  );
};
