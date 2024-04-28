import PropTypes from 'prop-types';
import { FooterMenuItem, InformativeLink } from './FooterItem.styled.js';

export const FooterItem = ({ listLinks = [] }) => {
  return (
    <FooterMenuItem>
      {listLinks.map(element => (
        <InformativeLink key={element.text} href={element.link}>
          {element.text}
        </InformativeLink>
      ))}
    </FooterMenuItem>
  );
};

FooterItem.propTypes = {
  listLinks: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
