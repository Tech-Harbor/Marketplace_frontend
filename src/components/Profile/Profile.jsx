import { Container, StyledLink, WrapperLinkExit } from './Profile.styled.js';
import TitleSection from './TitleSection/TitleSection.jsx';
import OptionsSection from './OptionLinkWithIcon/OptionsSection.jsx';
import LinkTo from './LinkTo/LinkTo.jsx';
import PostsSection from './PostsSection/PostsSection.jsx';

const Profile = () => {
  return (
    <Container>
      <TitleSection />
      <PostsSection />
      <StyledLink to={'/new-post'}>{'Додати оголошення'}</StyledLink>
      <OptionsSection />
      <WrapperLinkExit>
        <LinkTo to={'/'} title={'Вийти'} />
      </WrapperLinkExit>
    </Container>
  );
};

export default Profile;
