import InstagramIcon from '@mui/icons-material/Instagram';
import telegram from '../../assets/svg/telegram.svg';
import facebook from '../../assets/svg/facebook.svg';
import oranger from '../../assets/svg/oranger.svg';
import {
  Container,
  Img,
  ContainerDropDownMenu,
  DropDownMenu,
  ContainerIconLink,
  ContainerSocialNetworks,
  TextRights,
} from './Footer.styled.js';

function Footer() {
  return (
    <Container>
      <ContainerDropDownMenu>
        <DropDownMenu>Про нас</DropDownMenu>

        <DropDownMenu>Покупцям</DropDownMenu>

        <DropDownMenu>Продавцям</DropDownMenu>

        <DropDownMenu>Служба підтримки</DropDownMenu>
      </ContainerDropDownMenu>

      <ContainerIconLink>
        <ContainerSocialNetworks>
          <Img src={telegram} alt="Telegram" />

          <InstagramIcon sx={{ color: 'white', fontSize: 30 }} />

          <Img src={facebook} alt="Facebook" />
        </ContainerSocialNetworks>

        <Img src={oranger} alt="Oranger" />

        <TextRights>© 2024 Всі права захищені</TextRights>
      </ContainerIconLink>
    </Container>
  );
}

export default Footer;
