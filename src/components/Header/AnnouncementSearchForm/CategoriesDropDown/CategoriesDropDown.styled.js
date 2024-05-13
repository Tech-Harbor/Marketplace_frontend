import styled from 'styled-components';
import { device } from '../../../../utils/index.js';

export const StyledDropDownWrapper = styled.div`
  // Styles for CSSTransition
  .dropdown-enter {
    opacity: 0;
  }
  .dropdown-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }
  .dropdown-exit {
    opacity: 1;
  }
  .dropdown-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }

  @media ${device.laptop} {
    position: absolute;
    top: 42px;
    left: 0;
  }
`;

export const StyledDropDown = styled.div`
  border-radius: 0 0 4px 4px;
  background: #fcfcfc;
  padding: 0.5rem;
  width: 340px;
  max-width: 36rem;
  border: 1px solid #e6e6e6;

  @media ${device.desktop} {
    width: 430px;
  }
`;

export const StyledListCategories = styled.ul`
  @media ${device.desktop} {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
  }
`;

export const StyledCategories = styled.li`
  display: flex;
  padding: 10px;
  border-radius: 3px;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const StyledTitleCategories = styled.h3`
  font-family: Gilroy-Regular, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: #1b1e24;
`;
