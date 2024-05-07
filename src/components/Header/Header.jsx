import AnnouncementSearchForm from './AnnouncementSearchForm/AnnouncementSearchForm.jsx';
import ButtonWithIcons from './AnnouncementSearchForm/ButtonWithDropdownSection/ButtonWithIcons.jsx';

import iconProfile from '../../assets/svg/icon-profile.svg';
import iconDown from '../../assets/svg/icon-profile-down.svg';
import iconLocation from '../../assets/svg/icon-location.svg';

import { StyledButtonAddAnnouncement, StyledHeader, StyledIconLogo } from './Header.styled.js';

export const Header = () => {
  return (
    <StyledHeader>
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
    </StyledHeader>
  );
};
