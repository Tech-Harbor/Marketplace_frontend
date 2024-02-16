import styled from 'styled-components';

const fontStyles = `
  font-family: 'Gilroy-Regular', sans-serif;
  font-weight: 400;
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
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
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  color: #000;
  ${fontStyles};
  font-size: 16px;
  line-height: 24px;
`;

export const Icon = styled.div`
  cursor: pointer;
  position: absolute;
  right: 10px;
  z-index: 1;
`;
