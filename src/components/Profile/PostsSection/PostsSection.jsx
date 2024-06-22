import { LinkWithNavigateNextIcon } from '../../common';
import PostCard from '../PostCard/PostCard.jsx';
import { Section } from './PostsSection.styled.js';
import PropTypes from 'prop-types';

const PostsSection = ({ posts }) => {
  const postsProfile = posts.slice(0, 2);

  return (
    <Section>
      {/*TODO записати to={'/'} як буде готовий макет "Ваші оголошення"*/}
      <LinkWithNavigateNextIcon
        to={'/profile/user-posts'}
        title={'Всі оголошення'}
        className={'link-all-posts'}
      />

      <ul className={'posts-list'}>
        {postsProfile.map(post => (
          <PostCard key={post.id} {...post} />
        ))}
      </ul>
    </Section>
  );
};

PostsSection.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      postImage: PropTypes.elementType,
      postTitle: PropTypes.string.isRequired,
      postLocation: PropTypes.string.isRequired,
      postPrice: PropTypes.number.isRequired,
    })
  ),
};

export default PostsSection;
