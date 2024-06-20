import { StyledLink } from '../common';
import TitleSection from './TitleSection/TitleSection.jsx';
import PostsSection from './PostsSection/PostsSection.jsx';
import OptionsSection from './OptionsSection/OptionsSection.jsx';
import { Container } from './Profile.styled.js';

const Profile = () => {
  return (
    <>
      <Container>
        <TitleSection />
        <PostsSection />
        <StyledLink to={'/new-post'} className={'link-add-post'}>
          {'Додати оголошення'}
        </StyledLink>
        <OptionsSection />

        <div className={'link-exit__wrapper'}>
          <StyledLink to={'/'} className={'link-exit'}>
            {'Вийти'}
          </StyledLink>
        </div>
      </Container>
    </>
  );
};

export default Profile;
