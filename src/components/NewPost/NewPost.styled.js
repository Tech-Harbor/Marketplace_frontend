import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../utils';

export const Container = styled.div`
  width: 100%;

  @media ${device.tablet} {
    max-width: 768px;
    margin: 0 auto;
    padding: 0 24px;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px 0;
  border-bottom: 1px solid var(--color-border-primary);
`;

export const StyledTitle = styled.h1`
  margin: 0 auto;
  font-family: Gilroy-Medium, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: var(--color-primary-active);
  }
`;
