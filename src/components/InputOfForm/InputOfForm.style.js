import styled from 'styled-components';

const text = `
  font-family: 'Inter', sans-serif;
  font-weight: 400;
`;

export const Container = styled.div`
  max-width: 660px;
`;

export const Label = styled.label`
  ${text};
  font-size: 14px;
  line-height: 16px;
  @media (min-width: 550px) {
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
  @media (min-width: 760px) {
    & {
      font-size: 24px;
      line-height: 28px;
    }
  }
`;
