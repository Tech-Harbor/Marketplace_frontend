import styled from 'styled-components';
import { Link } from 'react-router-dom';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { device } from '../../utils';

// TODO: Ще не вирішили, чи картка товара буде мати статичну вишину, чи динамічну;
export const CardContainer = styled(Link)`
  display: block;
  width: 204px;
  height: 256px;
  border-radius: 8px;
  font-family: Gilroy-SemiBold, sans-serif;
  box-shadow: 0 0 5px 0 var(--color-container-card-product);

  @media ${device.untilLaptop} {
    width: 155px;
    height: 213px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 15px;
  width: 100%;
  height: 152px;

  @media ${device.untilLaptop} {
    margin-bottom: 5px;
    height: 131px;
  }
`;

export const DataContainer = styled.div`
  padding: 0 12px 16px 12px;
  width: 100%;

  @media ${device.untilLaptop} {
    padding: 0 9px 12px;
  }
`;

// TODO: Ще не вирішили, чи додавати три крапки в кінці першого рядка, чи переносити на другий, і аж тоді додавати;
export const Title = styled.span`
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 7px;
  font-family: Gilroy-Medium, sans-serif;
  font-size: 12px;
  line-height: 14px;

  @media ${device.untilLaptop} {
    margin-bottom: 5px;
    font-size: 10px;
    line-height: 12px;
  }
`;

export const Location = styled.span`
  display: block;
  margin-bottom: 15px;
  font-family: Gilroy-Medium, sans-serif;
  font-size: 12px;
  line-height: 14px;
  color: var(--color-border-input);

  @media ${device.untilLaptop} {
    font-size: 10px;
    line-height: 12px;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

// TODO: Ще не вирішили, що робити, коли ціна за велика, і руйнує макет;
export const Price = styled.div`
  font-family: Gilroy-Medium, sans-serif;
  font-size: 16px;
  line-height: 19px;
  color: var(--color-text-card-product-price);
`;

export const FollowOn = styled(FavoriteIcon)`
  font-size: 20px;
  color: var(--color-primary-active);
`;

export const FollowTurn = styled(FavoriteBorderIcon)`
  font-size: 20px;
  color: var(--color-primary-active);
`;
