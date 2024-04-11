import styled from 'styled-components';

export const StyledSeparator = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 25px auto;
  width: 278px;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid var(--color-auth-separator);
  }
`;

export const StyledText = styled.span`
  padding: 0 30px;
  font-family: Gilroy-Medium, sans-serif;
  font-size: 10px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  color: var(--color-auth-separator_text);
`;
