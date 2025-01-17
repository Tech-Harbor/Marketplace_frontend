import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100%;
  padding-bottom: 70px;
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 36px;
  border-radius: 8px;
  color: var(--color-secondary);
  background-color: var(--color-primary-active);
  font-family: Gilroy-Medium, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.41px;
  text-align: center;

  &.btn__add-later {
    margin-top: 24px;
    background-color: transparent;
    border: 2px solid var(--color-primary-active);
    color: var(--color-primary-active);
  }
`;

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 34px;
`;

export const StyledLabel = styled.p`
  margin-bottom: 8px;
  font-family: Gilroy-Regular, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -1px;
`;
