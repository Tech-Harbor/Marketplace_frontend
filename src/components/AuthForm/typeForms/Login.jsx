import { StyledTitle } from './typeForms.styled.js';
import { LoginForm } from '../forms/LoginForm.jsx';
import { TYPE_FORM } from '../../../constants/index.js';
import { AuthTextLink } from '../AuthTextLink/AuthTextLink.jsx';
import Separator from './Separator/Separator.jsx';
import iconGoogle from '../../../assets/svg/icon-google.svg';
import LinkExternalAuth from './LinkExternalAuth/LinkExternalAuth.jsx';

export const Login = () => {
  return (
    <>
      <StyledTitle>Вхід</StyledTitle>
      <LoginForm />
      <AuthTextLink
        linkTo={TYPE_FORM.REGISTER}
        linkText={'Створити акаунт'}
        text={'Немає акаунту?'}
      />
      <Separator />
      <LinkExternalAuth href={'/'} linkText={'Продовжити через Google'} icon={iconGoogle} />
    </>
  );
};
