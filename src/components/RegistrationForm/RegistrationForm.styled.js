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
  padding: 0 16px;
  width: 360px;
  background-color: var(--color-bg-form);

  @media ${device.laptop} {
    padding: 0 25px;
    width: 658px;
    border-radius: 10px;
  }

  @media ${device.desktop} {
    width: 708px;
    border-radius: 10px;
  }
`;

// Styles for Title component (h1)
export const StyledTitle = styled.h1`
  position: relative; // for underlined Title
  margin-top: 7px;
  padding: 6.5px 34px;
  font-family: Inter, sans-serif;
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
    background-color: var(--color-primary);
  }

  @media ${device.laptop} {
    margin-top: 17px;
    margin-bottom: 8px; // 20px-12px from Title margin-bottom
    padding: 6px 90px;
    font-size: 20px;
    line-height: 24px;
  }

  @media ${device.desktop} {
    margin-top: 26px;
    margin-bottom: 36px;
    padding: 14px 92px;
    font-size: 24px;
    line-height: 29px;
  }
`;

export { StyledFlexDiv };
