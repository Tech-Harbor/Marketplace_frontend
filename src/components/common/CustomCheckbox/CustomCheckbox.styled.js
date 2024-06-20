import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Check = styled.input`
  position: relative;
  width: 20px;
  aspect-ratio: 1;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0;
  z-index: 5;
`;

export const SwitchOff = styled.div`
  position: absolute;
  width: 20px;
  aspect-ratio: 1;
  border-radius: 4px;
  border: 1px solid var(--color-border-input);
`;

export const SwitchOn = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  aspect-ratio: 1;
  border-radius: 4px;
  background-color: var(--color-bg-checkbox-active);
`;

export const RememberText = styled.label`
  margin-left: 5px;
  font-family: Gilroy-Medium, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
`;
