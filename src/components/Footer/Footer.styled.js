import styled from 'styled-components';
import { Link } from 'react-router-dom';

import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

import { device } from '../../utils';

const levelChangeSize = '(max-width: 580px)';

export const Container = styled.footer`
  padding: 88px 16px 50px 16px;
  width: 100%;
  height: 100%;
  background-color: var(--color-label);

  @media ${levelChangeSize} {
    padding: 6px 16px 26px 16px;
  }

  //  additional place +56px for NavigationBar
  @media ${device.untilLaptop} {
    padding-bottom: 106px;
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
  margin-top: 88px;
  text-align: center;

  & > * {
    margin: 0 auto;
  }

  @media ${levelChangeSize} {
    margin-top: 33px;
  }
`;

export const ContainerSocialNetworks = styled.div`
  display: flex;
  column-gap: 25px;
  margin-bottom: 27px;
  width: fit-content;
`;

export const Telegram = styled(TelegramIcon).attrs({ sx: { fontSize: '30px' } })`
  color: var(--color-secondary);
`;

export const Instagram = styled(InstagramIcon).attrs({ sx: { fontSize: '30px' } })`
  color: var(--color-secondary);
`;

export const Facebook = styled(FacebookOutlinedIcon).attrs({ sx: { fontSize: '30px' } })`
  color: var(--color-secondary);
`;

export const OrangerLink = styled(Link)`
  display: inline-block;
  margin-bottom: 27px;
`;

export const TextAboutRights = styled.span`
  display: block;
  width: fit-content;
  font-family: 'Gilroy-Regular', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #b8b9be;
`;
