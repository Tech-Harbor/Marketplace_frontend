import { TYPE_FORM } from '../../../constants';

import { LoginForm } from '../forms';
import { AuthTextLink } from '../AuthTextLink/AuthTextLink.jsx';
import LinkExternalAuth from './LinkExternalAuth/LinkExternalAuth.jsx';
import Separator from './Separator/Separator.jsx';

import { StyledSeparator } from './Separator/Separator.styled.js';
import {
  StyledText,
  StyledTitle,
  StyledWrapper,
  StyledWrapperLeftPart,
  StyledWrapperRightPart,
} from './typeForms.styled.js';

export const Login = () => {
  return (
    <>
      <StyledTitle>Вхід</StyledTitle>
      <StyledSeparator className={'hidden-untilTablet'} />
      <StyledWrapper>
        <StyledWrapperLeftPart>
          <LoginForm />
          <AuthTextLink
            linkTo={TYPE_FORM.REGISTER}
            textAsLink={'Створити акаунт'}
            description={'Немає акаунту?'}
          />
        </StyledWrapperLeftPart>

        <StyledWrapperRightPart>
          <Separator className={'text hidden-tablet'} />
          {/* TODO: Дизайнер: маємо різні варіанти до кнопки Google : потрібен якийсь один
              TODO: у mobile є текст "Продовжити через" всередині кнопки, у tablet - ззовні */}

          {/* TODO ця кнопка Google - варіант для mobile, має клас 'hidden' зникає при 768px */}
          <LinkExternalAuth
            href={'https://api.oranger.store/oauth2/authorization/google'}
            linkText={'Продовжити через Google'}
            className={'hidden-tablet'}
          />

          {/* TODO: це варіант кнопки Google для tablet */}
          <StyledText>Продовжити через</StyledText>
          <LinkExternalAuth href={'/'} linkText={'Google'} className={'hidden-mobile'} />
        </StyledWrapperRightPart>
      </StyledWrapper>
    </>
  );
};
