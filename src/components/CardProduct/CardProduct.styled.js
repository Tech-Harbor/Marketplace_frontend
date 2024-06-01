import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { device } from '../../utils';

const fontStyles = `
font-size: 12px;
  line-height: 14px;
 
  @media ${device.untilLaptop} {
    font-size: 10px;
    line-height: 12px;
  }
`;

// TODO: Ще не вирішили, чи картка товара буде мати статичну вишину, чи динамічну;
export const CardContainer = styled(Link)`
  display: block;
  width: 204px;
  height: 256px;
  border-radius: 8px;
  box-shadow: 0 0 5px 0 var(--color-container-card-product);
  font-family: Gilroy-SemiBold, sans-serif;

  @media ${device.untilLaptop} {
    width: 155px;
    height: 213px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 152px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 15px;

  @media ${device.untilLaptop} {
    height: 131px;
    margin-bottom: 5px;
  }
`;

export const DataContainer = styled.div`
  width: 100%;
  padding: 0 12px 16px 12px;

  @media ${device.untilLaptop} {
    padding: 0 9px 12px;
  }
`;

// TODO: Ще не вирішили, чи додавати три крапки в кінці першого рядка, чи переносити на другий, і аж тоді додавати;
export const Title = styled.span`
  ${fontStyles};
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 7px;

  @media ${device.untilLaptop} {
    font-family: Gilroy-Medium, sans-serif;
    margin-bottom: 5px;
  }
`;

export const Location = styled.span`
  font-family: Gilroy-Medium, sans-serif;
  ${fontStyles};
  color: var(--color-border-input);
  display: block;
  margin-bottom: 15px;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

// TODO: Ще не вирішили, що робити, коли ціна за велика, і руйнує макет;
export const Price = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: var(--color-text-card-product-price);

  @media ${device.untilLaptop} {
    font-family: Gilroy-Medium, sans-serif;
  }
`;
