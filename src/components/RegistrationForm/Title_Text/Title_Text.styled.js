import styled from 'styled-components';

import { device } from '../../../utils';

/**
 * Styles for Title component (h1)
 */
export const StyledTitle = styled.h1`
  position: relative;

  margin-top: 7px;
  padding: 6.5px 34px;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  /* Underlined Title */
  &::after {
    position: absolute;

    content: '';
    bottom: 0;
    left: 0;

    width: 100%;
    height: 2px;

    border-radius: 2px;
    background-color: #000;
  }

  /* Styles for Laptop 1440px */
  @media ${device.laptopL} {
    margin-top: 26px;
    margin-bottom: 36px;
    padding: 14px 92px;

    font-size: 24px;
    line-height: 29.05px;
  }
`;

/**
 * Styles for Text component (p)
 */
export const StyledText = styled.p`
  font-family: Inter;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: center;

  color: #fff;
`;
