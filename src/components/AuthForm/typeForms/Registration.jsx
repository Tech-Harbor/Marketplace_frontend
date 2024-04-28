import { TYPE_FORM } from '../../../constants';
import iconGoogle from '../../../assets/svg/icon-google.svg';

import { RegistrationForm } from '../forms';
import { AuthTextLink } from '../AuthTextLink/AuthTextLink.jsx';
import LinkExternalAuth from './LinkExternalAuth/LinkExternalAuth.jsx';
import {
  StyledText,
  StyledTitle,
  StyledWrapper,
  StyledWrapperLeftPart,
  StyledWrapperRightPart,
} from './typeForms.styled.js';
import { StyledSeparator } from './Separator/Separator.styled.js';

export const Registration = () => {
  return (
    <>
      <StyledTitle>Реєстрація</StyledTitle>
      <StyledSeparator className={'hidden-untilTablet'} />
      <StyledWrapper>
        <StyledWrapperLeftPart>
          <RegistrationForm />
          <AuthTextLink
            description={'Вже маєте акаунт?'}
            textAsLink={'Увійти'}
            linkTo={TYPE_FORM.LOGIN}
          />
        </StyledWrapperLeftPart>
        <StyledWrapperRightPart>
          <StyledText>Продовжити через</StyledText>
          <LinkExternalAuth
            href={'https://api.oranger.store/oauth2/authorization/google'}
            linkText={'Google'}
            icon={iconGoogle}
            className={'hidden-mobile'}
          />
        </StyledWrapperRightPart>
      </StyledWrapper>
    </>
  );
};
