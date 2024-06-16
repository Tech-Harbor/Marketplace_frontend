import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  align-self: center;

  &.edit {
    font-family: Gilroy-Medium, sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;

    color: var(--color-primary-active);
  }
`;
