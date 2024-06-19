import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  font-family: Gilroy-Medium, sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
  color: var(--color-primary-active);

  &.link-exit {
    font-family: Gilroy-Medium, sans-serif;
    font-size: 20px;
    line-height: 1.1;
    text-decoration: underline;

    color: var(--color-primary-active);
  }

  &.link-add-post {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 36px;
    border-radius: 8px;
    font-family: Gilroy-Regular, sans-serif;
    font-size: 16px;
    line-height: 1.2;
    background-color: var(--color-primary-active);
    color: var(--color-btn-text);
  }
`;
