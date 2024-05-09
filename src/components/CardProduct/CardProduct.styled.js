import styled from 'styled-components';
import { device } from '../../utils/index.js';

const fontStyles = `
font-size: 12px;
  line-height: 14px;
 
  @media ${device.untilLaptop} {
    font-size: 10px;
    line-height: 12px;
  }
`;

export const CardContainer = styled.div`
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

export const Image = styled.img`
  width: 100%;
  height: 152px;
  text-align: center;
  object-fit: scale-down;
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
    padding: 0 9px 12px 9px;
  }
`;

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

export const Price = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: var(--color-text-card-product-price);

  @media ${device.untilLaptop} {
    font-family: Gilroy-Medium, sans-serif;
  }
`;
