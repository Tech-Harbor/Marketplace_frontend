import {
  StyledContainer,
  StyledIconSearch,
  StyledSearchForm,
  StyledSearchInput,
} from './AnnouncementSearchForm.styled.js';

const AnnouncementSearchForm = () => {
  return (
    <StyledSearchForm>
      <StyledContainer>
        <StyledIconSearch onClick={''} />
        <StyledSearchInput placeholder="Наприклад, Apple" />
      </StyledContainer>
    </StyledSearchForm>
  );
};

export default AnnouncementSearchForm;
