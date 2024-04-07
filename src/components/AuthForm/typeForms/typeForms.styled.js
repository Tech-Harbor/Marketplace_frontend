import styled from 'styled-components';

import { device } from '../../../utils/index.js';

// Helper for using display: flex;
const StyledFlexDiv = styled.div`
  display: flex;
  flex-direction: ${props => props.$direction || 'column'};
  align-items: ${props => props.$align || 'center'};
  justify-content: ${props => props.$justify || 'center'};

  // for icons in inputs
  &.icon-position {
    position: relative;
  }

  // for Header component
  &.search-input {
    @media ${device.untilLaptop} {
      display: none;
    }
  }
`;

// Styles for AuthForm
export const FormWrapper = styled(StyledFlexDiv)`
  padding: 24px 16px;
  width: 360px;
  background-color: var(--color-bg-form);
  border-radius: 8px;

  // @media ${device.laptop} {
  // }
  // @media ${device.desktop} {
  // }

  @media ${device.untilTablet} {
    width: 100%;
  }
`;

// Styles for Title component (h1)
export const StyledTitle = styled.h1`
  font-family: Gilroy-Medium, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.5px;
  align-self: flex-start;

  // @media ${device.laptop} {
  // }
  // @media ${device.desktop} {
  // }
`;

export { StyledFlexDiv };

export const StyledButtonGoogle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 36px;
  border: 1px solid var(--color-button-border-google);
  border-radius: 8px;

  font-family: Gilroy-Medium, sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
`;
