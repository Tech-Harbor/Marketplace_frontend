import PropTypes from 'prop-types';

import { StyledNavLink, StyledSVG, StyledText } from './NavBarItem.styled.js';
import sprite from '../../../assets/svg/sprite.svg';

const NavBarItem = ({ id, title, to }) => {
  return (
    <li>
      <StyledNavLink to={to}>
        <StyledSVG className={'active'}>
          <use href={`${sprite}#${id}`} />
        </StyledSVG>
        <StyledText className={'active'}>{title}</StyledText>
      </StyledNavLink>
    </li>
  );
};

NavBarItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavBarItem;
