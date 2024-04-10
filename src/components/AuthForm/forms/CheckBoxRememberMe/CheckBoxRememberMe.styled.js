import styled from 'styled-components';

export const RememberBlock = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Check = styled.input`
  width: 20px;
  aspect-ratio: 1;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0;
  position: relative;
  z-index: 5;
`;

export const SwitchOff = styled.div`
  width: 20px;
  aspect-ratio: 1;
  border-radius: 4px;
  border: 1px solid var(--color-border-input);
  position: absolute;
`;

export const SwitchOn = styled.div`
  width: 20px;
  aspect-ratio: 1;
  border-radius: 4px;
  background-color: var(--color-bg-checkbox-active);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const RememberText = styled.label`
  font-family: Gilroy-Medium, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;

  margin-left: 5px;
`;
