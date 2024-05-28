import styled from 'styled-components';
import { device } from '../../utils';
import iconLogo from '../../assets/svg/icon-logo.svg';

export const StyledHeader = styled.header``;

// TOP SECTION
export const ContainerTopSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  height: 56px;
  background-color: var(--color-bg-primary);

  @media ${device.laptop} {
    padding: 0 25px;
    height: 85px;
  }

  @media ${device.desktop} {
    padding: 0 70px;
  }
`;

export const StyledIconLogo = styled.img.attrs({
  src: iconLogo,
  alt: 'Logo',
})`
  display: none;

  @media ${device.laptop} {
    display: block;
  }
`;

// BOTTOM SECTION
export const AuthorizationSection = styled.div`
  display: none;

  @media ${device.laptop} {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 46px;
    background-color: #1b1e23f2;
  }
`;

export const StyledText = styled.p`
  padding: 0 24px;
  font-family: Gilroy-Regular, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: #fff;
`;
