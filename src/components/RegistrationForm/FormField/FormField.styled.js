import styled from 'styled-components';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { device } from '../../../utils';

/**
 * Styles for input component
 */
export const StyledInput = styled.input.attrs({
  type: 'text',
  required: true,
  autoComplete: 'true',
})`
  margin-top: 10px;
  padding: 12px 19px;
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 10px;
  background-color: var(--color-bg-form_input);
  color: var(--color-primary);

  &:focus-visible {
    outline: none;
  }

  @media ${device.laptopL} {
    padding: 18px 36px;
    height: 66px;
  }

  &.icon-place {
    padding-right: 50px; // reserved place for icon
  }
`;

/**
 * Styles for label component
 */
export const StyledLabel = styled.label`
  display: block;
  margin-top: 21px;
  font-family: Inter, serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0;
  text-align: left;

  @media ${device.laptop} {
    margin-top: 12px;
  }

  @media ${device.laptopL} {
    margin-top: 43px;
    font-size: 16px;
    line-height: 19.36px;
  }

  &.password {
    margin-top: 42px;

    @media ${device.laptop} {
      margin-top: 25px;
    }

    @media ${device.laptopL} {
      margin-top: 52px;
    }
  }

  &.repeat-password {
    margin-top: 17px;

    @media ${device.laptop} {
      margin-top: 12px;
    }

    @media ${device.laptopL} {
      margin-top: 17px;
    }
  }
`;

/**
 * Styles for wrapper button of icon
 */
export const StyledWrapperButton = styled.button({
  position: 'absolute',
  right: '24px',
  top: 'calc(50% - 7px)',

  // reset styles
  backgroundColor: 'transparent',
});

export const StyledIconForInput = styled(VisibilityOutlinedIcon)`
  color: var(--color-primary);
`;
