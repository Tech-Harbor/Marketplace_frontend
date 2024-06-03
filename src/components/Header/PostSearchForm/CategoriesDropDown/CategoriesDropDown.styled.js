import styled from 'styled-components';
import { device } from '../../../../utils';

export const StyledDropDownWrapper = styled.div`
  position: absolute;
  width: 100%;

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

  &.post-search-form {
    @media ${device.laptop} {
      width: 340px;
      top: 42px;
      left: 0;
    }

    @media ${device.desktop} {
      width: 430px;
    }
  }

  &.post-form {
    top: 66px;
    left: 0;
  }
`;

export const StyledDropDown = styled.div`
  border-radius: 0 0 4px 4px;
  background: #fff;
  padding: 20px;
  border: 1px solid #e6e6e6;
`;

export const StyledListCategories = styled.ul`
  @media ${device.desktop} {
    display: grid;
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
