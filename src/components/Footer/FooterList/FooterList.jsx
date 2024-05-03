import PropTypes from 'prop-types';
import { FooterMenuList, FooterMenuItem, FooterMenuLink } from './FooterList.styled.js';

export const FooterList = ({ linkList }) => {
  return (
    <FooterMenuList>
      {linkList.map(({ text, link }) => (
        <FooterMenuItem key={text}>
          <FooterMenuLink to={link}>{text}</FooterMenuLink>
        </FooterMenuItem>
      ))}
    </FooterMenuList>
  );
};

FooterList.propTypes = {
  linkList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};
