import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid var(--color-border-secondary);

  .link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;

    &:hover {
      color: var(--color-primary-active);
    }
  }

  .title {
    margin: 0 auto;
    font-family: Gilroy-Medium, sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
  }
`;
