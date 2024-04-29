import PropTypes from 'prop-types';
import { FooterMenuList, FooterMenuItem, FooterMenuLink } from './FooterList.styled.js';

export const FooterList = ({ listLinks }) => {
  return (
    <FooterMenuList>
      {listLinks.map(({ text, link }) => (
        <FooterMenuItem key={text}>
          <FooterMenuLink to={link}>{text}</FooterMenuLink>
        </FooterMenuItem>
      ))}
    </FooterMenuList>
  );
};

FooterList.propTypes = {
  listLinks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};
