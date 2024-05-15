import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  CardContainer,
  Image,
  DataContainer,
  Title,
  Location,
  BottomContainer,
  Price,
} from './CardProduct.styled.js';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const customStyles = { color: '#FF8A00', fontSize: 20 };

const CardProduct = ({ images, name, location, price }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <li>
      <CardContainer to="/">
        <Image src={images[0].imageUrl} />

        <DataContainer>
          <Title>{name}</Title>

          <Location>{location}</Location>

          <BottomContainer>
            <Price>{price} грн</Price>

            <i onClick={() => setToggle(!toggle)}>
              {toggle ? (
                <FavoriteIcon sx={customStyles} />
              ) : (
                <FavoriteBorderIcon sx={customStyles} />
              )}
            </i>
          </BottomContainer>
        </DataContainer>
      </CardContainer>
    </li>
  );
};

CardProduct.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CardProduct;
