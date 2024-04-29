import PropTypes from 'prop-types';
import { FooterMenuItem, InformativeLink } from './FooterItem.styled.js';

export const FooterItem = ({ listLinks }) => {
  return (
    <FooterMenuItem>
      {listLinks.map(({ text, link }) => (
        <InformativeLink key={text} href={link}>
          {text}
        </InformativeLink>
      ))}
    </FooterMenuItem>
  );
};

FooterItem.propTypes = {
  listLinks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};
