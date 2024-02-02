import styled from 'styled-components';

const text = `
  font-family: 'Inter', sans-serif;
  font-weight: 400;
`;

export const Container = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  ${text};
  font-size: 14px;
  line-height: 16px;
  @media (min-width: 1024px) {
    & {
      font-size: 16px;
      line-height: 19px;
    }
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 43px;
  background-color: #dadada;
  border: none;
  border-radius: 10px;
  color: #000;
  ${text};
  font-size: 16px;
  line-height: 19px;
  margin-top: 7px;
  @media (min-width: 1024px) {
    & {
      height: 51px;
      font-size: 20px;
      line-height: 24px;
    }
  }
  @media (min-width: 1440px) {
    & {
      height: 66px;
      font-size: 24px;
      line-height: 29px;
    }
  }
`;
