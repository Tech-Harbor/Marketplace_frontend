import { StyledTitle } from './typeForms.styled.js';
// import RequestEmailForm from '../forms/RequestEmailForm.jsx';
import { AuthTextLink } from '../AuthTextLink/AuthTextLink.jsx';
import { RequestEmailForm } from '../forms/RequestEmailForm.jsx';
import { PAGE } from '../../../constants/constants.js';

export const RequestEmail = () => {
  return (
    <>
      <StyledTitle>Відновлення паролю</StyledTitle>
      <RequestEmailForm />
      <AuthTextLink text={'Згадали пароль?'} linkText={'Увійти'} linkTo={PAGE.LOGIN} />
    </>
  );
};