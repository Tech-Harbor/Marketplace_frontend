import styled from 'styled-components';
import { device } from '../../../utils';

export const StyledForm = styled.form`
  width: 100%;
  min-height: 100%;
`;

// Styles for form button
export const StyledButton = styled.button`
  // .attrs({ disabled: true })
  margin-top: 10px;

  width: 100%;
  height: 50px;
  border: none;
  border-radius: 8px;
  background-color: var(--color-bg-form_btn-enable);

  font-family: Gilroy, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0;
  text-align: center;
  color: var(--color-btn-text);

  // @media ${device.laptop} {
  //   margin: 28px 0 9px 0;
  // }
  //
  // @media ${device.desktop} {
  //   margin: 58px 0 20px 0;
  // }
`;
