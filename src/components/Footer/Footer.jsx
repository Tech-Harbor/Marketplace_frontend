import { FOOTER_TEXT_LIST } from './TextDropDownMenu.js';
import { FooterList } from './FooterList/FooterList.jsx';
import Oranger from '../../assets/svg/Oranger.svg?react';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import {
  Container,
  FooterMenu,
  ContainerIconLink,
  ContainerSocialNetworks,
  OrangerLink,
  TextAboutRights,
} from './Footer.styled.js';

const customStyles = { color: 'white', fontSize: 30 };

export const Footer = () => {
  return (
    <Container>
      <FooterMenu>
        {FOOTER_TEXT_LIST.map(({ id, linkList }) => (
          <FooterList key={id} linkList={linkList} />
        ))}
      </FooterMenu>

      <ContainerIconLink>
        <ContainerSocialNetworks>
          <a href="https://t.me/+JTkkdn9oAnViZDcy" target="_blank" rel="noreferrer">
            <TelegramIcon sx={customStyles} />
          </a>

          <a
            href="https://www.instagram.com/oranger_marketplace/?igsh=YXR4dHJjdWd4dm5t"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon sx={customStyles} />
          </a>

          <a
            href="https://www.facebook.com/people/Oranger-marketplace/61558586681616/?mibextid=ZbWKwL"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookOutlinedIcon sx={customStyles} />
          </a>
        </ContainerSocialNetworks>

        <OrangerLink to="/">
          <Oranger alt="Oranger" />
        </OrangerLink>

        <TextAboutRights>© 2024 Всі права захищені</TextAboutRights>
      </ContainerIconLink>
    </Container>
  );
};
