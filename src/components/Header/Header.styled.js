import styled from 'styled-components';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { device } from '../../utils/index.js';

import iconLogo from '../../assets/svg/icon-logo.svg';
import iconMenu from '../../assets/svg/icon-mobile-menu.svg';
import iconShipping from '../../assets/svg/icon-shoping.svg';
import iconProfile from '../../assets/svg/icon-profile.svg';
// import { iconLogo, iconMenu,iconShipping,iconProfile} from "../../assets/svg"

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 56px;
  background-color: #254499;

  @media ${device.laptop} {
    padding: 0 45px 0 50px; // різні паддінги на макеті
    height: 72px;
  }

  @media ${device.desktop} {
    padding: 0 50px 0 110px;
    height: 80px;
  }

  // Styles for NavLink
  .link-logo {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

/* LEFT SIDE */
export const StyledIconLogo = styled.img.attrs({
  src: iconLogo,
  alt: 'Logo',
})`
  width: 24px;
  height: 24px;

  @media ${device.laptop} {
    width: 60px;
    height: 60px;
  }
`;
export const StyledTitle = styled.h1`
  margin-left: 10px;
  font-family: Oregano, sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0;
  color: var(--color-secondary);
`;

/* RIGHT SIDE */

// Styled input & icon

export const StyledSearchInput = styled.input.attrs({
  type: 'text',
  required: true,
  autoComplete: 'true',
})`
  @media ${device.laptop} {
    padding-right: 35px; // reserved place for icon
    padding-left: 10px; // !!! відсутні на макеті
    width: 323px;
    height: 36px;
    border: none;
    border-radius: 10px;
    background-color: var(--color-secondary);
    color: var(--color-primary);
    outline-style: none;
  }

  @media ${device.desktop} {
    width: 522px;
  }
`;

// Styles for wrapper of icon
export const StyledWrapperButton = styled.button({
  position: 'absolute',
  right: '9px',
  top: 'calc(50% - 12px)',

  // reset styles
  backgroundColor: 'transparent',
});

export const StyledIcon = styled(SearchOutlinedIcon)`
  width: 27px;
  height: 23px;
  color: var(--color-primary);
`;

// Styles for icon mobile menu
export const StyledMenuButton = styled.button`
  margin-left: 28px;
  width: 15px;
  background-color: transparent;

  @media ${device.laptop} {
    display: none;
  }
`;
export const StyledIconMenu = styled(MenuOutlinedIcon).attrs({
  src: iconMenu,
  alt: 'Mobile menu',
})`
  width: 24px;
  height: 24px;
  color: var(--color-secondary);
`;
// Styles for icons shipping and profile
export const StyledIconShipping = styled.img.attrs({
  src: iconShipping,
  alt: 'Icon Shipping',
})`
  @media ${device.untilLaptop} {
    display: none;
  }

  @media ${device.laptop} {
    margin-left: 7px;
    width: 50px;
    height: 50px;
    color: var(--color-secondary);
  }
`;
export const StyledIconProfile = styled.img.attrs({
  src: iconProfile,
  alt: 'Icon Profile',
})`
  @media ${device.untilLaptop} {
    display: none;
  }
  @media ${device.laptop} {
    margin-left: 10px;
    width: 50px;
    height: 50px;
    color: var(--color-secondary);
  }
`;
