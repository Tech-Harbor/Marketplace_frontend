import { RegistrationForm } from '../forms/RegistrationForm.jsx';
import { AuthTextLink } from '../AuthTextLink/AuthTextLink.jsx';

import { TYPE_FORM } from '../../../constants';
import { StyledTitle } from './typeForms.styled.js';

export const Registration = () => {
  return (
    <>
      {/*<FormWrapper>*/}
      <StyledTitle>Реєстрація</StyledTitle>
      <RegistrationForm />
      <AuthTextLink
        description={'Вже маєте акаунт?'}
        textAsLink={'Увійти'}
        linkTo={TYPE_FORM.LOGIN}
      />
      {/*</FormWrapper>*/}
    </>
  );
};
