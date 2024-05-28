import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authTokensSelector } from '../../redux/auth';

import AnnouncementSearchForm from './AnnouncementSearchForm/AnnouncementSearchForm.jsx';
import ButtonWithIcons from './AnnouncementSearchForm/ButtonWithDropdownSection/ButtonWithIcons.jsx';
import ButtonAuth from './ButtonAuth/ButtonAuth.jsx';
import AuthForm from '../AuthForm/AuthForm.jsx';

import IconProfile from '../../assets/svg/icon-profile.svg?react';
import IconDown from '../../assets/svg/icon-profile-down.svg?react';
import IconLocation from '../../assets/svg/icon-location.svg?react';

import {
  ContainerTopSide,
  StyledHeader,
  StyledIconLogo,
  AuthorizationSection,
  StyledText,
} from './Header.styled.js';
import LinkTo from './LinkTo/LinkTo.jsx';

export const Header = () => {
  const isAuthTokens = useSelector(authTokensSelector);
  return (
    <>
      <StyledHeader>
        <ContainerTopSide>
          <Link to={'/'}>
            <StyledIconLogo />
          </Link>
          <AnnouncementSearchForm />

          <ButtonWithIcons
            text={'Вибрати локацію'}
            iconLeftSide={IconLocation}
            className={'location-styles'}
          />

          {isAuthTokens && (
            <ButtonWithIcons
              text={'Профіль'}
              iconLeftSide={IconProfile}
              iconRightSide={IconDown}
              className={'profile-styles'}
            />
          )}

          <LinkTo to={'/announcement'} linkText={'Додати оголошення'} />
        </ContainerTopSide>

        {!isAuthTokens && (
          <AuthorizationSection>
            <ButtonAuth text={'Увійти'} />
            <StyledText>або</StyledText>
            <ButtonAuth text={'Зареєструватися'} />
          </AuthorizationSection>
        )}
      </StyledHeader>

      <AuthForm />
    </>
  );
};
