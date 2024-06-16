import { Link } from 'react-router-dom';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined.js';

import PostCard from '../PostCard/PostCard.jsx';
import { Posts, Section } from './PostsSection.styled.js';
import { Wrapper } from '../OptionLinkWithIcon/OptionLinkWithIcon.styled.js';

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
      <Wrapper className={'all-post-link'}>
        <p>{'Всі оголошення'}</p>
        {/*TODO записати to={'/'} як буде готовий макет "Ваші оголошення"*/}
        <Link to={'/'}>
          <NavigateNextOutlinedIcon />
        </Link>
      </Wrapper>
      <Posts>{!!posts && posts.map(post => <PostCard key={post.id} {...post} />)}</Posts>
    </Section>
  );
};

export default PostsSection;
