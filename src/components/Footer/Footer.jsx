import { FooterList } from './FooterList/FooterList.jsx';

import Oranger from '../../assets/svg/icon-logo.svg?react';

import { FOOTER_LINKS_LIST } from '../../constants/footerLinks.js';

import {
  Container,
  FooterMenu,
  ContainerIconLink,
  ContainerSocialNetworks,
  Telegram,
  Instagram,
  Facebook,
  OrangerLink,
  TextAboutRights,
} from './Footer.styled.js';

export const Footer = () => {
  return (
    <Container>
      <FooterMenu>
        {FOOTER_LINKS_LIST.map(({ id, linkList }) => (
          <FooterList key={id} linkList={linkList} />
        ))}
      </FooterMenu>

      <ContainerIconLink>
        <ContainerSocialNetworks>
          <a href="https://t.me/+JTkkdn9oAnViZDcy" target="_blank" rel="noreferrer">
            <Telegram />
          </a>

          <a
            href="https://www.instagram.com/oranger_marketplace/?igsh=YXR4dHJjdWd4dm5t"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>

          <a
            href="https://www.facebook.com/people/Oranger-marketplace/61558586681616/?mibextid=ZbWKwL"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook />
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
