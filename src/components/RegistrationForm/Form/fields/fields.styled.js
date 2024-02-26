import styled from 'styled-components';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

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
  position: relative;
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

  // @media ${device.desktop} {
  // }
`;

// Styles for wrapper button of icon
export const StyledWrapperButton = styled.button({
  position: 'absolute',
  right: '10px',
  top: 'calc(50% - 12px)',

  // reset styles
  backgroundColor: 'transparent',
});

export const StyledIconOn = styled(VisibilityOutlinedIcon)`
  color: var(--color-icon);
`;

export const StyledIconOff = styled(VisibilityOffOutlinedIcon)`
  color: var(--color-icon);
`;

// Styles for wrapper of field password;
export const StyledWrapperFieldPassword = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledTextValidation = styled.p`
  position: absolute;
  font-family: Gilroy-Regular, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: var(--color-error-input);
`;

export const StyledIcon = styled(VisibilityOutlinedIcon)`
  color: var(--color-icon);
`;
