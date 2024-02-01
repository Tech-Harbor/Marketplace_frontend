import styled from 'styled-components';

import { device } from '../../../utils';

/**
 * Styles for inputs
 */
export const StyledInput = styled.input.attrs({
  type: 'text',
  required: true,
  autoComplete: 'true',
})`
  margin-top: ${props => props.marginTop || '10px'};
  padding: 12px 19px;

  width: 100%;
  height: 45px;

  border: none;
  border-radius: 10px;
  background-color: #dadada;

  &:focus-visible {
    outline: none;
  }

  @media ${device.laptopL} {
    padding: 18px 36px;

    height: 66px;
  }
`;

export const StyledInputIcon = styled(StyledInput)`
  padding-right: 36px; // reserved place for icon
`;

/**
 * Styles for labels
 */
export const StyledLabel = styled.label`
  display: block;

  margin-top: ${props => props.marginTop || '21px'};

  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;

  @media ${device.laptopL} {
    margin-top: 43px;

    font-size: 16px;
    line-height: 19.36px;
  }
`;

export const StyledLabelPassword = styled(StyledLabel)`
  margin-top: 42px;

  @media ${device.laptopL} {
    margin-top: 52px;
  }
`;

export const StyledLabelRepeatPassword = styled(StyledLabel)`
  margin-top: 17px;
`;
