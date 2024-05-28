import styled from 'styled-components';

export const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const StyledLabel = styled.label`
  margin-bottom: 8px;

  font-family: Gilroy-Regular, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -1px;
`;

export const StyledTextarea = styled.textarea.attrs({
  rows: 8,
  placeholder: 'Наприклад, iPhone 12 Pro Max 512GB у гарному стані',
})`
  resize: vertical;
  outline: none;

  width: 100%;
  padding: 13px 10px;

  border: 1px solid var(--color-border-input);
  border-radius: 4px;

  font-family: Gilroy-Regular, sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 15px;
  text-align: left;
`;
