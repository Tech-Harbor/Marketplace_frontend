import { FOOTER_TEXT_LIST } from './TextDropDownMenu.js';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import {
  Container,
  DropDownMenuList,
  DropDownMenuItem,
  InformativeLink,
  ContainerIconLink,
  ContainerSocialNetworks,
  StyledOranger,
  TextRights,
} from './Footer.styled.js';

const customStyles = { color: 'white', fontSize: 30, cursor: 'pointer' };

export const Footer = () => {
  return (
    <Container>
      <DropDownMenuList>
        {FOOTER_TEXT_LIST.map((element, index) => (
          <DropDownMenuItem key={index}>
            {element.map(itemElement => (
              <InformativeLink key={itemElement.text} href={itemElement.link}>
                {itemElement.text}
              </InformativeLink>
            ))}
          </DropDownMenuItem>
        ))}
      </DropDownMenuList>

      {/*<DropDownMenuList>*/}
      {/*  <DropDownMenuItem>*/}
      {/*    <InformativeLink href="/">Про нас</InformativeLink>*/}
      {/*    <InformativeLink href="/">Покупцям</InformativeLink>*/}
      {/*  </DropDownMenuItem>*/}
      {/*  <DropDownMenuItem>*/}
      {/*    <InformativeLink href="/">Продавцям</InformativeLink>*/}
      {/*    <InformativeLink href="/">Реклама на сайті</InformativeLink>*/}
      {/*  </DropDownMenuItem>*/}
      {/*  <DropDownMenuItem>*/}
      {/*    <InformativeLink href="/">Служба підтримки</InformativeLink>*/}
      {/*    <InformativeLink href="/">Політика конфіденціності</InformativeLink>*/}
      {/*  </DropDownMenuItem>*/}
      {/*</DropDownMenuList>*/}

      <ContainerIconLink>
        <ContainerSocialNetworks>
          <TelegramIcon sx={customStyles} />

          <InstagramIcon sx={customStyles} />

          <FacebookOutlinedIcon sx={customStyles} />
        </ContainerSocialNetworks>

        <StyledOranger alt="Oranger" />

        <TextRights>© 2024 Всі права захищені</TextRights>
      </ContainerIconLink>
    </Container>
  );
};
