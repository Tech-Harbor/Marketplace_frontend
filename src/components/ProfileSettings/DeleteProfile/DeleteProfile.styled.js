import styled from 'styled-components';

export const Section = styled.section`
  padding: 25px 0;

  .title {
    margin-bottom: 10px;
    font-family: Gilroy-Medium, sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 24.26px;
    text-align: center;
  }

  .text {
    margin-bottom: 30px;
    font-family: Gilroy-Regular, sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
  }

  .btn {
    width: 100%;
    height: 36px;
    border-radius: 8px;
    font-family: Gilroy-Medium, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
    text-align: center;

    &--delete {
      margin-bottom: 20px;
      color: var(--color-secondary);
      background-color: var(--color-primary-active);
    }

    &--return {
      background-color: #fff;
      color: var(--color-primary-active);
      border: 2px solid var(--color-primary-active);
    }
  }
`;
