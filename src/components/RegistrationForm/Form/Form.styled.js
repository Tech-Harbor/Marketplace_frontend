import styled from 'styled-components';
import { device } from '../../../utils';

export const StyledForm = styled.form`
  width: 100%;
  min-height: 100%;
`;

/**
 * Styles for Text component (p)
 */
export const StyledText = styled.p`
  font-family: Inter;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: center;

  color: var(--color-btn-text);
`;

/**
 * Styles for form button
 */

// .attrs({ disabled: true })
export const StyledButton = styled.button`
  margin: 67px 0 17px 0;
  padding: 8px, 24px, 8px, 24px;

  width: 100%;
  height: 66px;

  border: none;
  border-radius: 10px;

  background-color: var(--color-bg-form_btn-disable);

  @media ${device.laptop} {
    margin: 28px 0 9px 0;
  }
  @media ${device.laptopL} {
    margin: 58px 0 20px 0;
  }
`;
