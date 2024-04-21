import styled from 'styled-components';
import { device } from '../../../../utils/index.js';

export const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  border: 1px solid var(--color-button-border-google);
  border-radius: 8px;
  font-family: Gilroy-Medium, sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0;
  background-color: transparent;
  color: var(--color-button-text-google);

  @media ${device.tablet} {
    &.hidden-tablet {
      display: none;
    }
  }
  @media ${device.untilTablet} {
    &.hidden-mobile {
      display: none;
    }
  }
`;
export const StyledIcon = styled.img`
  margin-right: 11px;
`;
