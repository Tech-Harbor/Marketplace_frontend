import styled from 'styled-components';

const fontStyles = `
  font-family: 'Gilroy-Regular', sans-serif;
  font-weight: 400;
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: ${props => (props.$show ? 'block' : 'none')};
`;

export const Label = styled.label`
  ${fontStyles};
  font-size: 15px;
  line-height: 22px;
`;

export const InputBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 36px;
  background: none;
  border: 1px solid ${props => (props.$error ? '#F74A4F' : '#0000007F')};
  border-radius: 4px;
  color: #000;
  ${fontStyles};
  font-size: 16px;
  line-height: 24px;
  padding: 0 50px 0 17px;

  &:focus {
    outline: none;
  }
`;

export const IconBlock = styled.div`
  display: flex;
  position: absolute;
  right: 10px;
  z-index: 1;
`;

export const IconUse = styled.div`
  cursor: pointer;
  margin-left: 5px;
`;

export const ErrorText = styled.div`
  font-family: 'Gilroy-Medium', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  color: #f74a4f;
`;
