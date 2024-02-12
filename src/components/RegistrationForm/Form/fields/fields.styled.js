import styled from 'styled-components';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
// import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

import { device } from '../../../../utils/index.js';

// Styles for input component
export const StyledInput = styled.input.attrs({
  type: 'text',
  // required: true,
  autoComplete: 'true',
})`
  margin-top: 10px;
  padding: 12px 19px;
  width: 100%;
  height: 44px;
  border: 1px solid #00000080;
  border-radius: 4px;
  color: var(--color-primary); // ??

  font-family: Gilroy-Regular, sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.5px;
  text-align: left;

  &:focus-visible {
    outline: none;
  }

  &.icon-place {
    padding-right: 36px; // reserved place for icon
  }

  // @media ${device.desktop} {
  //   padding: 18px 36px;
  //   height: 66px;
  // }
`;

// Styles for label component

export const StyledLabel = styled.label`
  display: block;
  margin-top: 20px;
  font-family: Gilroy-Regular, sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.5px;
  text-align: left;

  // @media ${device.laptop} {
  //   margin-top: 12px;
  // }
  //
  // @media ${device.desktop} {
  //   margin-top: 43px;
  //   font-size: 16px;
  //   line-height: 19.36px;
  // }

  // &.password {
  //   margin-top: 42px;
  //
  //   @media ${device.laptop} {
  //     margin-top: 25px;
  //   }
  //
  //   @media ${device.desktop} {
  //     margin-top: 52px;
  //   }
  }


`;

// Styles for wrapper button of icon
export const StyledWrapperButton = styled.button({
  position: 'absolute',
  right: '10px',
  top: 'calc(50% - 7px)',

  // reset styles
  backgroundColor: 'transparent',
});

export const StyledIcon = styled(VisibilityOutlinedIcon)`
  color: var(--color-primary);
`;
