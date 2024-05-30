import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import PostForm from './PostForm/PostForm.jsx';
import { Container, StyledLink, StyledTitle, TitleSection } from './NewPost.styled.js';

const NewPost = () => {
  return (
    <Container>
      <TitleSection>
        <StyledLink to={'/'}>
          <NavigateBeforeIcon />
        </StyledLink>
        <StyledTitle>Додати оголошення</StyledTitle>
      </TitleSection>
      <PostForm />
    </Container>
  );
};

export default NewPost;
