import { StyledTitle } from './modalPages.styled.js';
// import ResetPasswordForm from '../forms/ResetPasswordForm.jsx';
import { AuthLink } from '../TitleHaveAccount/AuthLink.jsx';
import { ResetPasswordForm } from '../forms/ResetPasswordForm.jsx';
import { PAGE } from '../../../constants/constants.js';

export const ResetPassword = () => {
  return (
    <>
      <StyledTitle>Відновлення паролю</StyledTitle>
      <ResetPasswordForm />
      <AuthLink text={'Згадали пароль?'} linkText={'Увійти'} linkTo={PAGE.LOGIN} />
    </>
  );
};
