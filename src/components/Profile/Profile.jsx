import { StyledLink } from '../common';
import TitleSection from './TitleSection/TitleSection.jsx';
import PostsSection from './PostsSection/PostsSection.jsx';
import OptionsSection from './OptionsSection/OptionsSection.jsx';
import { Container } from './Profile.styled.js';

// TODO тимчасовий масив initialPosts та import postImage
import postImage from '../../assets/imges/post-photo-exampe_sq.jpg';
const initialPosts = [
  {
    id: '1',
    postImage: postImage,
    postTitle: 'Apple iPhone 14 Pro 512GB Gold',
    postLocation: 'Київ1',
    postPrice: 58855,
  },
  {
    id: '2',
    postImage: postImage,
    postTitle: 'Apple iPhone 14 Pro 512GB Gold',
    postLocation: 'Київ2',
    postPrice: 58855,
  },
  {
    id: '3',
    postImage: postImage,
    postTitle: 'Apple iPhone 14 Pro 512GB Gold',
    postLocation: 'Київ3',
    postPrice: 58855,
  },
];

const Profile = () => {
  return (
    <>
      <Container>
        <TitleSection />
        <PostsSection posts={initialPosts} />
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
