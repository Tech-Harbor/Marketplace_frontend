import { PageTitle } from '../common/index.js';
import PostCard from '../Profile/PostCard/PostCard.jsx';

// TODO тимчасовий масив initialPosts та import postImage
import postImage from '../../assets/imges/post-photo-exampe2_sq.jpg';
import { Section } from './ProfileUserPosts.styled.js';

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

const ProfileUserPosts = () => {
  return (
    <>
      <PageTitle to={'/profile'} title={'Ваші оголошення'} />
      <Section>
        <ul className={'posts-list'}>
          {initialPosts.map(post => (
            <PostCard key={post.id} className={'profile-posts'} {...post} />
          ))}
        </ul>
      </Section>
    </>
  );
};

export default ProfileUserPosts;
