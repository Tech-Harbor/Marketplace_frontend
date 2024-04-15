import { ResetPasswordForm } from '../forms/ResetPasswordForm.jsx';
import { StyledTitle } from './typeForms.styled.js';

export const ResetPassword = () => {
  return (
    <>
      <StyledTitle>Відновлення паролю</StyledTitle>
      <ResetPasswordForm />
    </>
  );
};
