import { FOOTER_TEXT_LIST } from './TextDropDownMenu.js';
import { FooterList } from './FooterList/FooterList.jsx';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import {
  Container,
  FooterMenu,
  ContainerIconLink,
  ContainerSocialNetworks,
  StyledOranger,
  TextAboutRights,
} from './Footer.styled.js';

const customStyles = { color: 'white', fontSize: 30, cursor: 'pointer' };

export const Footer = () => {
  return (
    <Container>
      <FooterMenu>
        {FOOTER_TEXT_LIST.map(({ id, linkList }) => (
          <FooterList key={id} listLinks={linkList} />
        ))}
      </FooterMenu>

      <ContainerIconLink>
        <ContainerSocialNetworks>
          <TelegramIcon sx={customStyles} />

          <InstagramIcon sx={customStyles} />

          <FacebookOutlinedIcon sx={customStyles} />
        </ContainerSocialNetworks>

        <StyledOranger alt="Oranger" />

        <TextAboutRights>© 2024 Всі права захищені</TextAboutRights>
      </ContainerIconLink>
    </Container>
  );
};
