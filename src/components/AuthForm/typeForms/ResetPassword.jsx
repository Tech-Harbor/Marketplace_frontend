import { StyledTitle } from './typeForms.styled.js';
// import ResetPasswordForm from '../forms/ResetPasswordForm.jsx';
import { AuthTextLink } from '../AuthTextLink/AuthTextLink.jsx';
import { ResetPasswordForm } from '../forms/ResetPasswordForm.jsx';
import { PAGE } from '../../../constants/constants.js';

export const ResetPassword = () => {
  return (
    <>
      <StyledTitle>Відновлення паролю</StyledTitle>
      <ResetPasswordForm />
      <AuthTextLink text={'Згадали пароль?'} linkText={'Увійти'} linkTo={PAGE.LOGIN} />
    </>
  );
};
