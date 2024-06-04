import styled from 'styled-components';
import { device } from '../../utils/index.js';

export const FakeBoxForNavBar = styled.div`
  height: 56px;

  @media ${device.laptop} {
    display: none;
  }
`;
