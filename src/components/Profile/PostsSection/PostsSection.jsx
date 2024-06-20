import { LinkWithNavigateNextIcon } from '../../common';
import PostCard from '../PostCard/PostCard.jsx';
import { Section } from './PostsSection.styled.js';

// TODO тимчасовий масив initialPosts та import postImage
import postImage from '../../../assets/imges/post-photo-exampe_sq.jpg';
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

const PostsSection = () => {
  const posts = initialPosts.slice(0, 2);

  return (
    <Section>
      {/*TODO записати to={'/'} як буде готовий макет "Ваші оголошення"*/}
      <LinkWithNavigateNextIcon
        to={'/profile/user-posts'}
        title={'Всі оголошення'}
        className={'link-all-posts'}
      />

      <ul className={'posts-list'}>
        {posts.map(post => (
          <PostCard key={post.id} {...post} />
        ))}
      </ul>
    </Section>
  );
};

export default PostsSection;
