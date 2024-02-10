import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background-color: #17317b;
  border: none;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  &[disabled] {
    background-color: ${props => props.$disabledStyles};
    color: #fff;
  }
`;
