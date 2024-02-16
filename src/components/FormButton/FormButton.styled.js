import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  color: #ffffff;
  background-color: ${props => (props.$isValid ? '#FF8A00' : '#FF8A00')};
  border: none;
  border-radius: 8px;
  font-family: 'Gilroy-Regular', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  padding: 10px;
`;
