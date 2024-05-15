import styled from 'styled-components';

import { device } from '../../utils/index.js';

export const CategoryContainer = styled.div`
  width: 100%;
  margin-bottom: 26px;

  @media ${device.laptop} {
    margin-bottom: 50px;
  }
`;

export const Title = styled.span`
  font-family: Gilroy-SemiBold, sans-serif;
  font-size: 32px;
  line-height: 39px;
  display: inline-block;
  margin-bottom: 32px;
`;

export const CardContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 18px;

  @media ${device.laptop} {
    gap: 50px 55px;
  }
`;
