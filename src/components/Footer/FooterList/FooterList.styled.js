import styled from 'styled-components';
import { Link } from 'react-router-dom';

const levelChangeSize = '(max-width: 580px)';

export const FooterMenuList = styled.ul`
  @media ${levelChangeSize} {
    width: 100%;
  }
`;

export const FooterMenuItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 16px;

    @media ${levelChangeSize} {
      &:not(:last-child) {
        margin-bottom: 0;
      }
    }
  }
`;

export const FooterMenuLink = styled(Link)`
  display: block;
  font-family: 'Gilroy-Regular', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--color-btn-text);

  @media ${levelChangeSize} {
    font-family: 'Gilroy-Medium', sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    padding: 20px 7px;
    border-bottom: 1px solid #6c727533;
  }
`;
