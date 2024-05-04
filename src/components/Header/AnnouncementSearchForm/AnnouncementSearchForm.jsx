import ButtonWithDropdownSection from './ButtonWithDropdownSection/ButtonWithDropdownSection.jsx';
import {
  StyledContainer,
  StyledIconSearch,
  StyledSearchForm,
  StyledSearchInput,
  StyledButtonSearch,
} from './AnnouncementSearchForm.styled.js';

import iconSectionsClose from '../../../assets/svg/icon-sections-close.svg';
import iconSectionsDown from '../../../assets/svg/icon-sections-down.svg';

const AnnouncementSearchForm = () => {
  const handleOnClick = () => {};
  return (
    <StyledSearchForm>
      <StyledContainer>
        <StyledIconSearch onClick={handleOnClick} />
        <StyledSearchInput placeholder="Наприклад, Apple" />

        <ButtonWithDropdownSection
          text={'Розділи'}
          iconLeftSide={iconSectionsClose}
          iconRightSide={iconSectionsDown}
        />
        <StyledButtonSearch>Пошук</StyledButtonSearch>
      </StyledContainer>
    </StyledSearchForm>
  );
};

export default AnnouncementSearchForm;
