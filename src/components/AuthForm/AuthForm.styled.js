import styled from 'styled-components';
import { device } from '../../utils';
import iconProfile from '../../assets/svg/icon-profile.svg';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded.js';

// Profile icon styles
export const StyledIconProfile = styled.img.attrs({
  src: iconProfile,
  alt: 'StyledIcon Profile',
})`
  cursor: pointer;
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

// Modal styles
export const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  background-color: #fff;

  @media ${device.tablet} {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const StyledContentWrapper = styled.div`
  position: relative;
  padding: 24px 16px;
  background-color: var(--color-bg-form);
  border-radius: 8px;
  width: 100%;

  @media ${device.tablet} {
    padding: 15px 35px;
    width: 640px;
  }
`;

export const StyledCloseButton = styled(CloseRoundedIcon)`
  position: absolute;
  top: 25px;
  right: 16px;
  color: #33363f;
  cursor: pointer;

  @media ${device.tablet} {
    top: 15px;
    right: 35px;
  }
`;
