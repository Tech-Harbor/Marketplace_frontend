import { TYPE_FORM } from '../../../constants';
import iconGoogle from '../../../assets/svg/icon-google.svg';

import { LoginForm } from '../forms';
import { AuthTextLink } from '../AuthTextLink/AuthTextLink.jsx';
import LinkExternalAuth from './LinkExternalAuth/LinkExternalAuth.jsx';
import Separator from './Separator/Separator.jsx';
import {
  StyledText,
  StyledTitle,
  StyledWrapper,
  StyledWrapperLeftPart,
  StyledWrapperRightPart,
} from './typeForms.styled.js';
import { StyledSeparator } from './Separator/Separator.styled.js';

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
            href={'/'}
            linkText={'Продовжити через Google'}
            icon={iconGoogle}
            className={'hidden-tablet'}
          />

          {/* TODO: це варіант кнопки Google для tablet */}
          <StyledText>Продовжити через</StyledText>
          <LinkExternalAuth
            href={'/'}
            linkText={'Google'}
            icon={iconGoogle}
            className={'hidden-mobile'}
          />
        </StyledWrapperRightPart>
      </StyledWrapper>
    </>
  );
};
