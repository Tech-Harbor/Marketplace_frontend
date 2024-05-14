import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  border-radius: 50%;

  &.active {
    fill: var(--color-primary-active);
    color: var(--color-primary-active);
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
`;
