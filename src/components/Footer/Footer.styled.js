import styled from 'styled-components';
import { Link } from 'react-router-dom';

import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

import { device } from '../../utils';

export const Container = styled.footer`
  //Add 26px + 56px (reserve place for NavigationBar)
  padding: 6px 16px 82px;
  width: 100%;
  height: 100%;
  background-color: var(--color-label);

  @media ${device.laptop} {
    padding: 88px 16px 50px;
  }
`;

export const FooterMenu = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 840px;
`;

export const ContainerIconLink = styled.div`
  margin-top: 33px;
  text-align: center;

  & > * {
    margin: 0 auto;
  }

  @media ${device.laptop} {
    margin-top: 88px;
  }
`;

export const ContainerSocialNetworks = styled.div`
  display: flex;
  column-gap: 25px;
  margin-bottom: 27px;
  width: fit-content;
`;

const createStyledIcon = IconComponent => styled(IconComponent).attrs({ sx: { fontSize: '30px' } })`
  color: var(--color-secondary);
`;

export const Telegram = createStyledIcon(TelegramIcon);
export const Instagram = createStyledIcon(InstagramIcon);
export const Facebook = createStyledIcon(FacebookOutlinedIcon);

export const OrangerLink = styled(Link)`
  display: inline-block;
  margin-bottom: 27px;
`;

export const TextAboutRights = styled.span`
  display: block;
  width: fit-content;
  font-family: 'Gilroy-Regular', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #b8b9be;
`;
