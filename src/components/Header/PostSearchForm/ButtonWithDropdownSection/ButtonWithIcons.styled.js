import styled from 'styled-components';
import { device } from '../../../../utils/index.js';

export const StyledButtonSection = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 42px;
  background-color: var(--color-bg-form);

  font-family: Gilroy-Medium, sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;

  &.profile-styles {
    justify-content: space-between;
    width: 150px;
    color: var(--color-secondary);
    background-color: transparent;
  }

  &.post-search-form {
    @media ${device.untilLaptop} {
      display: none;
    }
  }

  &.post-form {
    width: 100%;
    justify-content: space-between;
    padding: 0 10px;
    height: 36px;
    border: 1px solid var(--color-border-input);
    border-radius: 4px;
    font-family: Gilroy-Regular, sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 15.6px;
    text-align: left;
  }

  @media ${device.desktop} {
    width: 175px;
  }

  &.location-styles {
    display: none;

    @media ${device.desktop} {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 165px;
      color: var(--color-secondary);
      background-color: transparent;
    }
  }
`;

export const StyledIconWrapper = styled.div`
  transition: all 0.3s ease-in-out;
  transform: ${({ $isOpenDropDown }) => ($isOpenDropDown ? 'rotate(180deg)' : 'rotate(0deg)')};
  display: inline-block;
`;
