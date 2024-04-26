import styled from 'styled-components';

import { device } from '../../../utils';

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

export const StyledWrapper = styled.div`
  @media ${device.tablet} {
    display: flex;
  }
`;

export const StyledWrapperLeftPart = styled.div`
  @media ${device.tablet} {
    position: relative;
    width: 60%;
    padding-right: 20px;

    &::after {
      content: '';
      position: absolute;
      top: 20px;
      bottom: 20px;
      right: 0;
      border-right: 1px solid #6c727533;
    }
  }
`;

export const StyledWrapperRightPart = styled.div`
  @media ${device.tablet} {
    width: 40%;
    padding-left: 20px;
  }
`;

export const StyledText = styled.p`
  display: none;

  @media ${device.tablet} {
    display: block;
    margin-top: 5px;
    margin-bottom: 15px;
    font-family: Gilroy-Regular, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    color: #a6a7ab;
  }
`;

export { StyledFlexDiv };
