import styled from 'styled-components';
import { device } from '../../../utils';

export const StyledForm = styled.form`
  margin-bottom: 17px; // margin between the form and text below.
  width: 100%;
  min-height: 100%;
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 36px;
  border: none;
  border-radius: 8px;
  font-family: Gilroy-Medium, sans-serif;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0;
  text-align: center;
  color: var(--color-btn-text);

  &.submit-button {
    margin-top: 24px;
  }
  //  styles for disable button
  background-color: ${({ $isFormValid }) =>
    $isFormValid ? 'var(--color-primary-active)' : 'var(--color-btn-disabled)'};

  // @media ${device.laptop} {
  // }
  // @media ${device.desktop} {
  // }
`;

export const StyledWrapperRememberMe = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
