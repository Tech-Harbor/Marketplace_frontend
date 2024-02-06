import styled from 'styled-components';
import { device } from '../../utils/index.js';

const fontStyles = `
  font-family: 'Inter', sans-serif;
  font-weight: 400;
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const Label = styled.label`
  ${fontStyles};
  font-size: 14px;
  line-height: 16px;

  @media ${device.laptop} {
    font-size: 16px;
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 43px;
  background-color: #dadada;
  border: none;
  border-radius: 10px;
  color: #000;
  ${fontStyles};
  font-size: 16px;
  line-height: 24px;
  margin-top: 7px;

  @media ${device.laptop} {
    height: 51px;
    font-size: 20px;
  }

  @media ${device.desktop} {
    height: 66px;
    font-size: 24px;
  }
`;

export const Icon = styled.div`
  cursor: pointer;
  position: absolute;
  top: 47px;
  right: 24px;
  z-index: 1;

  @media ${device.mobile} {
    top: 32px;
  }

  @media ${device.laptop} {
    top: 36px;
  }

  @media ${device.desktop} {
    top: 44px;
  }
`;
