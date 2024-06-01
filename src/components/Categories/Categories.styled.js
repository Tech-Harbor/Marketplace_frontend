import styled from 'styled-components';

import { device } from '../../utils/index.js';

export const CategoryContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 18px 29px;
  margin: 16px auto 29px;

  @media ${device.laptop} {
    display: none;
  }
`;

export const Category = styled.li`
  width: 90px;
  text-align: center;
  display: block;
`;

export const ImageContainer = styled.div`
  height: 90px;
  border-radius: 50%;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 8px;
`;

export const Text = styled.span`
  font-family: Gilroy-Medium, sans-serif;
  font-size: 12px;
  line-height: 15px;
`;
