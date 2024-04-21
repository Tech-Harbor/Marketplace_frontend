import { TYPE_FORM } from '../../../constants';
import { RequestEmailForm } from '../forms';

import { AuthTextLink } from '../AuthTextLink/AuthTextLink.jsx';
import { StyledTitle } from './typeForms.styled.js';

export const RequestEmail = () => {
  return (
    <>
      <StyledTitle>Відновлення паролю</StyledTitle>
      <RequestEmailForm />
      <AuthTextLink
        description={'Згадали пароль?'}
        textAsLink={'Увійти'}
        linkTo={TYPE_FORM.LOGIN}
      />
    </>
  );
};
