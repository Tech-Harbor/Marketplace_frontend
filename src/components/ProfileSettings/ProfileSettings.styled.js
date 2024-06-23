import styled from 'styled-components';

export const Section = styled.div`
  padding: 17px 0;

  .option-title {
    margin-bottom: 12px;
    font-family: Gilroy-Medium, sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
  }

  .option-checkbox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    padding: 0 15px;
  }
  .option-notification {
    margin-bottom: 5px;
  }

  .notification-text {
    margin-bottom: 20px;
    font-family: Gilroy-Regular, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.8px;
    text-align: left;
  }
`;
