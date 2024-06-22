import { useState } from 'react';
import PropTypes from 'prop-types';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { StyledButton, StyledItem } from './PostCard.styled.js';

const PostCard = ({ postImage, postTitle, postLocation, postPrice, className }) => {
  const [toggle, setToggle] = useState(false);
  const formatedPostPrice = postPrice.toLocaleString('uk-UA');

  return (
    <StyledItem>
      <img src={postImage} alt={postTitle} className={className} />

      <div className={'post-description'}>
        <h3 className={'post-title'}>{postTitle}</h3>
        <p className={'post-location'}>{postLocation}</p>

        <div className={'wrapper'}>
          <p className={'price'}>{`${formatedPostPrice} грн`}</p>
          <StyledButton onClick={() => setToggle(!toggle)} className={className}>
            {!toggle && <FavoriteBorderOutlinedIcon />}
            {toggle && <FavoriteOutlinedIcon />}
          </StyledButton>
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
  className: PropTypes.string,
};

export default PostCard;
