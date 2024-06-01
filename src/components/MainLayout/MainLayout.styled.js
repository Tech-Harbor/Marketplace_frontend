import styled from 'styled-components';
import { device } from '../../utils/index.js';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Main = styled.main`
  max-width: 1440px;
  padding: 0 16px;
  margin: 0 auto;

  @media ${device.laptop} {
    padding: 0 100px;
  }
`;

export const FakeBoxForNavBar = styled.div`
  background-color: red;
  height: 56px;

  @media ${device.laptop} {
    display: none;
  }
`;
