import styled from 'styled-components';
import { device } from '../../../../utils';

export const StyledSeparator = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 25px auto;

  &.text {
    padding-left: 20px;
    padding-right: 20px;
  }

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid var(--color-auth-separator);
  }

  @media ${device.untilTablet} {
    &.hidden-untilTablet {
      display: none;
    }
  }

  @media ${device.tablet} {
    margin: 12px auto;

    width: 100%;
    &.hidden-tablet {
      display: none;
    }
  }
`;

export const StyledText = styled.span`
  padding: 0 30px;
  font-family: Gilroy-Medium, sans-serif;
  font-size: 10px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  color: var(--color-auth-separator_text);
`;
