import { FOOTER_TEXT_LIST } from './TextDropDownMenu.js';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import Oranger from '../../assets/svg/Oranger.svg?react';
import {
  Container,
  DropDownMenuList,
  DropDownMenuItem,
  InformativeLink,
  ContainerIconLink,
  ContainerSocialNetworks,
  TextRights,
} from './Footer.styled.js';

const customStyles = { color: 'white', fontSize: 30, cursor: 'pointer' };

export const Footer = () => {
  return (
    <Container>
      <DropDownMenuList>
        {FOOTER_TEXT_LIST.map(element => (
          <DropDownMenuItem key={element.text}>
            <InformativeLink href={element.link}>{element.text}</InformativeLink>
          </DropDownMenuItem>
        ))}
      </DropDownMenuList>

      <ContainerIconLink>
        <ContainerSocialNetworks>
          <TelegramIcon sx={customStyles} />

          <InstagramIcon sx={customStyles} />

          <FacebookOutlinedIcon sx={customStyles} />
        </ContainerSocialNetworks>

        <Oranger />

        <TextRights>© 2024 Всі права захищені</TextRights>
      </ContainerIconLink>
    </Container>
  );
};
