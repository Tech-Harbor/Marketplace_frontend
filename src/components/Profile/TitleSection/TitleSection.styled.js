import styled from 'styled-components';

export const TitleProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 15px 0;
  border-bottom: 1px solid var(--color-border-secondary);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  width: 100%;

  .name {
    font-family: Gilroy-Medium, sans-serif;
    font-size: 15px;
    font-weight: 600;
    line-height: 22px;
  }

  .email {
    font-family: Gilroy-Regular, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`;
