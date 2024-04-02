import { StyledTitle } from './modalPages.styled.js';
// import ResetPasswordForm from '../forms/ResetPasswordForm.jsx';
import TitleHaveAccount from '../TitleHaveAccount/TitleHaveAccount.jsx';
import { ResetPasswordForm } from '../forms/ResetPasswordForm.jsx';

export const ResetPassword = () => {
  return (
    <>
      <StyledTitle>Відновлення паролю</StyledTitle>
      <ResetPasswordForm />
      <TitleHaveAccount />
    </>
  );
};
