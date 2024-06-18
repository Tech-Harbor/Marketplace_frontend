import styled from 'styled-components';
import { device } from '../../utils/index.js';

export const Wrapper = styled.div`
  width: 100%;
  flex: 1 1 auto;
`;

export const Main = styled.main`
  margin: 0 auto;
  padding: 0 16px;
  max-width: 1440px;

  @media ${device.laptop} {
    padding: 0 100px;
  }
`;

export const FakeBoxForNavBar = styled.div`
  height: 56px;
  background-color: red;

  @media ${device.laptop} {
    display: none;
  }
`;
