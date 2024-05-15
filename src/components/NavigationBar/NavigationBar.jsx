import NavBarItem from './NavBarItem/NavBarItem.jsx';
import { SPRITE } from '../../constants/index.js';
import { StyledNavBarList } from './NavigationBar.styled.js';

const NavigationBar = () => {
  return (
    <StyledNavBarList>
      {SPRITE.map(({ id, title, to }) => (
        <NavBarItem key={id} title={title} id={id} to={to} />
      ))}
    </StyledNavBarList>
  );
};

export default NavigationBar;
