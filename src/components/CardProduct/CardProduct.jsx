import PropTypes from 'prop-types';
import { useState } from 'react';

import {
  CardContainer,
  ImageContainer,
  DataContainer,
  Title,
  Location,
  BottomContainer,
  Price,
  FollowOn,
  FollowTurn,
} from './CardProduct.styled.js';

const CardProduct = ({ image, name, location, price }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <li>
      <CardContainer to="/">
        <ImageContainer>
          <img src={image} alt={name} />
        </ImageContainer>

        <DataContainer>
          <Title>{name}</Title>

          <Location>{location}</Location>

          <BottomContainer>
            <Price>{price} грн</Price>

            <button onClick={() => setToggle(!toggle)}>
              {toggle ? <FollowOn /> : <FollowTurn />}
            </button>
          </BottomContainer>
        </DataContainer>
      </CardContainer>
    </li>
  );
};

CardProduct.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CardProduct;
