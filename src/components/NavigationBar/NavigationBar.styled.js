import styled from 'styled-components';
import { device } from '../../utils';

export const StyledNavBarList = styled.ul`
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 100;
  background-color: #fff;

  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 10px 9.5px;

  @media ${device.laptop} {
    display: none;
  }
`;
