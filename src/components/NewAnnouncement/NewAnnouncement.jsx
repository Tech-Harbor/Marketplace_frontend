import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import AnnouncementForm from './AnnouncementForm/AnnouncementForm.jsx';
import { Container, StyledLink, StyledTitle, TitleSection } from './NewAnnouncement.styled.js';

const NewAnnouncement = () => {
  return (
    <Container>
      <TitleSection>
        <StyledLink to={'/'}>
          <NavigateBeforeIcon />
        </StyledLink>

        <StyledTitle>Додати оголошення</StyledTitle>
      </TitleSection>

      <AnnouncementForm />
    </Container>
  );
};

export default NewAnnouncement;
