import { useState } from 'react';
import PropTypes from 'prop-types';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { StyledItem } from './PostCard.styled.js';

const PostCard = ({ postImage, postTitle, postLocation, postPrice }) => {
  const [toggle, setToggle] = useState(false);
  const formatedPostPrice = postPrice.toLocaleString('uk-UA');

  return (
    <StyledItem>
      <img src={postImage} alt={postTitle} />

      <div className={'post-description'}>
        <h3 className={'post-title'}>{postTitle}</h3>
        <p className={'post-location'}>{postLocation}</p>

        <div className={'wrapper'}>
          <p className={'price'}>{`${formatedPostPrice} грн`}</p>
          <button onClick={() => setToggle(!toggle)} className={'button-favorite'}>
            {!toggle && <FavoriteBorderOutlinedIcon />}
            {toggle && <FavoriteOutlinedIcon />}
          </button>
        </div>
      </div>
    </StyledItem>
  );
};

PostCard.propTypes = {
  postImage: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  postLocation: PropTypes.string.isRequired,
  postPrice: PropTypes.number.isRequired,
};

export default PostCard;
