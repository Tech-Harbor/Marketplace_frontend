import { RegistrationForm } from '../forms/RegistrationForm.jsx';
import { AuthLink } from '../TitleHaveAccount/AuthLink.jsx';

import { StyledTitle } from './modalPages.styled.js';
import { PAGE } from '../../../constants/constants.js';

export const Registration = () => {
  return (
    <>
      {/*<FormWrapper>*/}
      <StyledTitle>Реєстрація</StyledTitle>
      <RegistrationForm />
      <AuthLink text={'Вже маєте акаунт?'} linkText={'Увійти'} linkTo={PAGE.LOGIN} />
      {/*</FormWrapper>*/}
    </>
  );
};
