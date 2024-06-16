import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;

  p {
    font-family: Gilroy-Regular, sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -1px;
    text-align: left;
  }

  a {
    height: 24px;
  }

  &.all-post-link {
    justify-content: flex-end;
    margin-bottom: 14px;
    padding: 0;
    font-size: 15px;
  }
`;
