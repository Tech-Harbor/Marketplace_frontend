import styled from 'styled-components';

import { device } from '../../utils';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0 16px;

  width: 360px;
  height: 100%;

  background-color: #fff;

  @media ${device.laptopL} {
    margin-top: 27px;
    margin-bottom: 23px;
    padding: 0 25px;

    width: 708px;
    height: 936px;

    border-radius: 10px;
  }
`;
