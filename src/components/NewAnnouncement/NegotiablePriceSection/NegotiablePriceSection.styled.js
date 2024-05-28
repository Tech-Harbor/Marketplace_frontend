import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const StyledText = styled.span`
  font-family: Gilroy-Regular, sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -1px;
`;

export const StyledInput = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

export const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  font-size: 6px;

  width: 6em;
  height: 3.4em;

  ${StyledInput} {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const StyledToggleSwitch = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 3.4em;

  transition: 0.4s;

  &::before {
    position: absolute;
    content: '';
    height: 2.6em;
    width: 2.6em;
    left: 0.4em;
    bottom: 0.4em;
    background-color: white;
    border-radius: 50%;

    transition: 0.4s;
  }

  ${StyledInput}:checked + & {
    background-color: var(--color-primary-active);
  }

  ${StyledInput}:checked + &::before {
    transform: translateX(2.6em);
  }
`;
