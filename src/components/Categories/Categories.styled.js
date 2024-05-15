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
`;

export const Image = styled.img`
  border-radius: 50%;
`;

export const Text = styled.span`
  font-family: Gilroy-Medium, sans-serif;
  font-size: 12px;
  line-height: 15px;
`;
