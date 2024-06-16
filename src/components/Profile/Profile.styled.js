import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
`;

export const WrapperLinkExit = styled.div`
  height: 46px;
  text-align: center;
  margin-bottom: 20px;
  padding: 12px 0;
  border-top: 1px solid var(--color-border-secondary);
  border-bottom: 1px solid var(--color-border-secondary);

  font-family: Gilroy-Medium, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 22px;

  color: var(--color-primary-active);
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 42px;
  border-radius: 8px;
  background-color: var(--color-primary-active);
  color: var(--color-secondary);
  font-family: Gilroy-Medium, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
`;
