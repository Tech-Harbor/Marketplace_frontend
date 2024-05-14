import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { device } from '../../../utils';

export const StyledSearchForm = styled.form`
  position: relative;
  display: flex;
  width: 100%;

  @media ${device.laptop} {
    width: 415px;
    height: 42px;
  }

  @media ${device.desktop} {
    width: 515px;
  }
`;

export const StyledSearchInput = styled.input.attrs({
  type: 'text',
  required: true,
  autoComplete: 'true',
})`
  padding-left: 17px;
  padding-right: 35px; // reserved place for icon
  width: 100%;

  height: 36px;

  border: 0;
  border-radius: 8px;
  background-color: var(--color-bg-form);
  font-family: Gilroy-Medium, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;

  @media ${device.laptop} {
    padding-left: 35px; // reserved place for icon
    padding-right: 17px;

    width: 205px;
    height: 42px;

    border-radius: ${({ $isOpenDropDown }) => ($isOpenDropDown ? '4px 0 0 0' : '4px 0 0 4px')};

    @media ${device.desktop} {
      width: 255px;
    }
  }
`;

export const StyledIconSearch = styled(SearchOutlinedIcon)`
  position: absolute;
  right: 6px;
  top: calc(50% - 12px);
  color: var(--color-primary);

  @media ${device.laptop} {
    left: 9px;
  }
`;

export const StyledButtonSearch = styled.button`
  display: none;

  @media ${device.laptop} {
    display: block;
    padding: 0 10px;
    width: 75px;
    border-radius: 0 4px 4px 0;
    background-color: var(--color-primary-active);
    color: var(--color-secondary);
    font-family: Gilroy-Medium, sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
  }

  @media ${device.desktop} {
    width: 85px;
  }
`;
