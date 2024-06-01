import styled from 'styled-components';

import { device } from '../../utils/index.js';

export const CategoryContainer = styled.div`
  margin-bottom: 26px;
  width: 100%;

  @media ${device.laptop} {
    margin-bottom: 50px;
  }
`;

export const Title = styled.span`
  display: inline-block;
  margin-bottom: 32px;
  font-family: Gilroy-SemiBold, sans-serif;
  font-size: 32px;
  line-height: 39px;
`;

export const CardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 18px;
  width: 100%;

  @media ${device.laptop} {
    gap: 50px 55px;
  }
`;
