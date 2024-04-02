import styled from 'styled-components';

export const StyledText = styled.p`
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-family: Gilroy-Medium, sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: var(--color-primary);

  .text {
    margin-left: 5px;
    color: var(--color-primary-active);
  }
`;
