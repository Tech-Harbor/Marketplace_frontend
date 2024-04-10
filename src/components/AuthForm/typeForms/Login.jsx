import { TYPE_FORM } from '../../../constants';
import { LoginForm } from '../forms';
import { AuthTextLink } from '../AuthTextLink/AuthTextLink.jsx';
import LinkExternalAuth from './LinkExternalAuth/LinkExternalAuth.jsx';
import Separator from './Separator/Separator.jsx';
import iconGoogle from '../../../assets/svg/icon-google.svg';
import { StyledTitle } from './typeForms.styled.js';

export const Login = () => {
  return (
    <>
      <StyledTitle>Вхід</StyledTitle>
      <LoginForm />
      <AuthTextLink
        linkTo={TYPE_FORM.REGISTER}
        textAsLink={'Створити акаунт'}
        description={'Немає акаунту?'}
      />
      <Separator />
      <LinkExternalAuth href={'/'} linkText={'Продовжити через Google'} icon={iconGoogle} />
    </>
  );
};
