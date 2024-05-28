import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../../utils/index.js';

export const StyledLinkTo = styled(Link)`
  display: none;

  @media ${device.laptop} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 216px;
    height: 42px;
    border-radius: 8px;
    background-color: var(--color-primary-active);
    color: var(--color-secondary);
    font-family: Gilroy-Medium, sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
  }
`;
