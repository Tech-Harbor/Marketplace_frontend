import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { device } from '../../../utils';

export const FooterMenuList = styled.ul`
  width: 100%;

  @media ${device.laptop} {
    width: inherit;
  }
`;

export const FooterMenuItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 0;

    @media ${device.laptop} {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }
`;

export const FooterMenuLink = styled(Link)`
  display: block;
  padding: 20px 7px;
  border-bottom: 1px solid #6c727533;
  font-family: 'Gilroy-Medium', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: var(--color-btn-text);

  @media ${device.laptop} {
    padding: 0;
    border-bottom: 0;
    font-family: 'Gilroy-Regular', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`;
