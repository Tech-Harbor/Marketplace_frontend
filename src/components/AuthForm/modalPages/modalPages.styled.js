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
    @media ${device.beforeLaptop} {
      display: none;
    }
  }
`;

// Styles for AuthForm
export const FormWrapper = styled(StyledFlexDiv)`
  padding: 24px 16px;
  width: 360px;
  background-color: var(--color-bg-form);

  // @media ${device.laptop} {
  // }
  // @media ${device.desktop} {
  // }
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
