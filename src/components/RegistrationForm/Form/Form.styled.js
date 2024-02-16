import styled from 'styled-components';
import { device } from '../../../utils';

export const StyledForm = styled.form`
  margin-bottom: 17px; // відступ між формою та текстом нижче
  width: 100%;
  min-height: 100%;
`;

// Styles for form button
export const StyledButton = styled.button`
  //margin-top: 10px;

  width: 100%;
  height: 36px;
  border: none;
  border-radius: 8px;

  font-family: Gilroy-Medium, sans-serif;
  font-size: 16px;
  //font-weight: 500;
  line-height: 19px;
  letter-spacing: 0;
  text-align: center;
  color: var(--color-btn-text);

  //  styles for disable button

  background-color: ${({ $isValid }) => ($isValid ? 'var(--color-primary-active)' : 'grey')};

  // @media ${device.laptop} {
  // }
  //
  // @media ${device.desktop} {
  // }
`;
