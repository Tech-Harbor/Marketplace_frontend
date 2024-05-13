import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const changeColor = keyframes`
    from {
        fill: var(--color-primary);
        color: var(--color-primary);
    }
    to {
        fill: var(--color-primary-active);
        color: var(--color-primary-active);
    }
`;

const revertColor = keyframes`
  from {
      fill: var(--color-primary-active);
      color: var(--color-primary-active);
  }
  to {
    fill: var(--color-primary);
    color: var(--color-primary);
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  border-radius: 50%;

  &.active {
    fill: var(--color-primary-active) !important;
    color: var(--color-primary-active) !important;
  }

  &:hover {
    animation: ${changeColor} 300ms linear forwards;
  }

  &:not(:hover) {
    animation: ${revertColor} 300ms linear forwards;
  }
`;

export const StyledSVG = styled.svg`
  width: 24px;
  height: 24px;
`;

export const StyledText = styled.p`
  font-family: Gilroy-Medium, sans-serif;
  font-size: 10px;
  font-weight: 600;
  line-height: 12.25px;
  text-align: center;
`;
