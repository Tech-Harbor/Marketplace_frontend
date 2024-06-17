import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  &.input-name {
    margin-bottom: 27px;
  }

  &.input-price {
    margin-bottom: 22px;
  }
`;

export const StyledLabel = styled.label`
  margin-bottom: 8px;
  font-family: Gilroy-Regular, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -1px;
`;

export const StyledInput = styled.input`
  padding: 0 10px;
  height: 36px;
  border: 1px solid var(--color-border-input);
  border-radius: 4px;
  font-family: Gilroy-Regular, sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 15.6px;
  text-align: left;
`;
