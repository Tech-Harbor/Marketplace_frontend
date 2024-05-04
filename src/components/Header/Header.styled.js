import styled from 'styled-components';
import { device } from '../../utils';
import iconLogo from '../../assets/svg/icon-logo.svg';

export const StyledHeader = styled.header`
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

export const StyledButtonAddAnnouncement = styled.button`
  display: none;

  @media ${device.laptop} {
    display: block;
    width: 216px;
    height: 42px;
    border-radius: 8px;
    background-color: var(--color-primary-active);
    color: var(--color-secondary);
  }
`;
