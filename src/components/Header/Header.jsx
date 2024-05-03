import { StyledHeader } from './Header.styled.js';
import AnnouncementSearchForm from './AnnouncementSearchForm/AnnouncementSearchForm.jsx';

export const Header = () => {
  return (
    <StyledHeader>
      <AnnouncementSearchForm />
    </StyledHeader>
  );
};
