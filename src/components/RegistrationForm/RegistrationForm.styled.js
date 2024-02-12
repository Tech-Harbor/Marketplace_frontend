import styled from 'styled-components';

import { device } from '../../utils';

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

// Styles for RegistrationForm
export const FormWrapper = styled(StyledFlexDiv)`
  padding: 24px 16px 52px;
  width: 375px;
  background-color: var(--color-bg-form);

  // @media ${device.laptop} {
  //   margin: 12px 0;
  //   padding: 0 25px;
  //   width: 658px;
  //   border-radius: 10px;
  // }
  //
  // @media ${device.desktop} {
  //   margin: 27px 0;
  //   width: 708px;
  //   border-radius: 10px;
  // }
`;

// Styles for Title component (h1)
export const StyledTitle = styled.h1`
  font-family: Gilroy, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.5px;
  align-self: flex-start;

  // @media ${device.laptop} {
  //   margin-top: 17px;
  //   margin-bottom: 8px; // 20px-12px from Title margin-bottom
  //   padding: 6px 90px;
  //   font-size: 20px;
  //   line-height: 24px;
  // }
  //
  // @media ${device.desktop} {
  //   margin-top: 26px;
  //   margin-bottom: 36px;
  //   padding: 14px 92px;
  //   font-size: 24px;
  //   line-height: 29px;
  // }
`;

export { StyledFlexDiv };
