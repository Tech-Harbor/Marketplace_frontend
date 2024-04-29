import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FooterMenuList, FooterMenuItem } from './FooterList.styled.js';

export const FooterList = ({ listLinks }) => {
  return (
    <FooterMenuList>
      {listLinks.map(({ text, link }) => (
        <Link to={link} key={text}>
          <FooterMenuItem>{text}</FooterMenuItem>
        </Link>
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
