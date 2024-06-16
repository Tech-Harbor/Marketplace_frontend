import { useState } from 'react';
import PropTypes from 'prop-types';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { DescriptionWrapper, StyledItem, PriceWrapper } from './PostCard.styled.js';

const PostCard = ({ postImage, postTitle, postLocation, postPrice }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <StyledItem>
      <img src={postImage} alt={postTitle} />

      <DescriptionWrapper>
        <h3>{postTitle}</h3>
        <p className={'location'}>{postLocation}</p>

        <PriceWrapper>
          <p className={'price'}>{`${postPrice} грн`}</p>
          <button onClick={() => setToggle(!toggle)}>
            {!toggle && <FavoriteBorderOutlinedIcon />}
            {toggle && <FavoriteOutlinedIcon />}
          </button>
        </PriceWrapper>
      </DescriptionWrapper>
    </StyledItem>
  );
};

PostCard.propTypes = {
  postImage: PropTypes.string,
  postTitle: PropTypes.string,
  postLocation: PropTypes.string,
  postPrice: PropTypes.number,
};

export default PostCard;
