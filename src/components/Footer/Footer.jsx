import { dataList } from '../../data/TextDropDownMenu.js';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import oranger from '../../assets/svg/oranger.svg';
import { FooterDropDownMenu } from '../FooterDropDownMenu/FooterDropDownMenu.jsx';
import {
  Container,
  Img,
  ContainerDropDownMenu,
  ContainerIconLink,
  ContainerSocialNetworks,
  TextRights,
} from './Footer.styled.js';

const customStyles = { color: 'white', fontSize: 30, cursor: 'pointer' };

export const Footer = () => {
  return (
    <Container>
      <ContainerDropDownMenu>
        {dataList.map((element, index) => (
          <FooterDropDownMenu key={index} title={element.title} list={element.list} />
        ))}
      </ContainerDropDownMenu>

      <ContainerIconLink>
        <ContainerSocialNetworks>
          <TelegramIcon sx={customStyles} />

          <InstagramIcon sx={customStyles} />

          <FacebookIcon sx={customStyles} />
        </ContainerSocialNetworks>

        <Img src={oranger} alt="Oranger" />

        <TextRights>© 2024 Всі права захищені</TextRights>
      </ContainerIconLink>
    </Container>
  );
};
