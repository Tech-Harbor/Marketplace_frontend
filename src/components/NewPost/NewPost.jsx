import { useState } from 'react';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import PostForm from './PostForm/PostForm.jsx';
import SuccessAnnouncement from './SuccessAnnouncement/SuccessAnnouncement.jsx';

import { Container, StyledLink, StyledTitle, TitleSection } from './NewPost.styled.js';

const NewPost = () => {
  const [isPublished, setIsPublished] = useState(false);

  return (
    <>
      {isPublished ? (
        <SuccessAnnouncement onSuccess={() => setIsPublished(false)} />
      ) : (
        <Container>
          <TitleSection>
            <StyledLink to={'/'}>
              <NavigateBeforeIcon />
            </StyledLink>
            <StyledTitle>Додати оголошення</StyledTitle>
          </TitleSection>
          <PostForm onSuccess={() => setIsPublished(true)} />
        </Container>
      )}
    </>
  );
};

export default NewPost;
