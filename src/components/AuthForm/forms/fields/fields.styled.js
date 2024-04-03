import styled from 'styled-components';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import { device } from '../../../../utils/index.js';

// Styles for label component
export const StyledFieldName = styled.p`
  margin-top: 20px;
  margin-bottom: 8px;
  font-family: Gilroy-Regular, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.4px;
  text-align: left;
  color: var(--color-label);

  // @media ${device.laptop} {
  // }
  // @media ${device.desktop} {
  // }
`;

// Styles for input component
export const StyledInput = styled.input.attrs({
  autoComplete: 'true',
})`
  padding: 0 17px;
  width: 100%;
  height: 36px;
  border: 1px solid
    ${({ $fieldError }) => ($fieldError ? 'var(--color-error-input)' : 'var(--color-border-input)')};
  border-radius: 4px;
  color: var(--color-primary); // ??
  font-family: Gilroy-Regular, sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0;

  &:focus-visible {
    outline: none;
  }

  &.password-field {
    margin-bottom: 0;
    padding-right: 36px; // reserved place for icon
  }

  &.phone-field {
    padding-left: 18px; // reserved place for icon
  }

  &.email-field_reset-psw {
    margin-bottom: 24px;
  }

  // @media ${device.desktop} {
  // }
`;

export const StyledSelect = styled.select.attrs({
  defaultValue: ' ',
})`
  padding: 0 17px;
  width: 100%;
  height: 36px;
  border: 1px solid
    ${({ $fieldError }) => ($fieldError ? 'var(--color-error-input)' : 'var(--color-border-input)')};
  border-radius: 4px;
  color: var(--color-primary); // ??
  font-family: Gilroy-Regular, sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0;

  &:focus-visible {
    outline: none;
  }

  // @media ${device.desktop} {
  // }
`;

// Styles for password field wrapper
export const StyledWrapperFieldPassword = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

// Styles for wrapper button of icon
export const StyledWrapperButton = styled.button`
  position: absolute;
  right: 10px;
  background-color: transparent;
  height: 24px;
`;

export const StyledIconOn = styled(VisibilityOutlinedIcon)`
  color: var(--color-icon-primary);
`;

export const StyledIconOff = styled(VisibilityOffOutlinedIcon)`
  color: var(--color-icon-primary);
`;

// Styles for phone field wrapper
export const StyledWrapperFieldPhone = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledIconPlus = styled(AddOutlinedIcon)`
  position: absolute;
  left: 4px;
  width: 15px !important;
  color: var(--color-icon-secondary);
`;

// Styles for text validation
export const StyledTextValidation = styled.p`
  position: absolute;
  font-family: Gilroy-Regular, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: var(--color-error-input);
`;
