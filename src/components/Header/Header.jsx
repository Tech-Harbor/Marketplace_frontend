import AnnouncementSearchForm from './AnnouncementSearchForm/AnnouncementSearchForm.jsx';
import ButtonWithIcons from './AnnouncementSearchForm/ButtonWithDropdownSection/ButtonWithIcons.jsx';

import iconProfile from '../../assets/svg/icon-profile.svg';
import iconDown from '../../assets/svg/icon-profile-down.svg';
import iconLocation from '../../assets/svg/icon-location.svg';

import {
  ContainerTopSide,
  StyledButtonAddAnnouncement,
  StyledHeader,
  StyledIconLogo,
  AuthorizationSection,
  StyledText,
} from './Header.styled.js';
import ButtonAuth from './ButtonAuth/ButtonAuth.jsx';
import AuthForm from '../AuthForm/AuthForm.jsx';

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <ContainerTopSide>
          <StyledIconLogo />
          <AnnouncementSearchForm />

          <ButtonWithIcons
            text={'Вибрати локацію'}
            iconLeftSide={iconLocation}
            className={'location-styles'}
          />

          <ButtonWithIcons
            text={'Профіль'}
            iconLeftSide={iconProfile}
            iconRightSide={iconDown}
            className={'profile-styles'}
          />
          <StyledButtonAddAnnouncement>Додати оголошення</StyledButtonAddAnnouncement>
        </ContainerTopSide>
        <AuthorizationSection>
          <ButtonAuth text={'Увійти'} />
          <StyledText>або</StyledText>
          <ButtonAuth text={'Зареєструватися'} />
        </AuthorizationSection>
      </StyledHeader>

      <AuthForm />
    </>
  );
};
