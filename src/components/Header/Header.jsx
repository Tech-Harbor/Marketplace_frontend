import { Link, NavLink } from 'react-router-dom';
import { StyledFlexDiv } from '../RegistrationForm/RegistrationForm.styled.js';
import {
  StyledHeader,
  StyledIconMenu,
  StyledIconLogo,
  StyledMenuButton,
  StyledTitle,
  StyledIconShipping,
  StyledIconProfile,
  StyledSearchInput,
} from './Header.styled.js';
import { StyledIcon, StyledWrapperButton } from './Header.styled.js';
// import SelectLang from "../SelectLang/SelectLang.jsx";

export const Header = () => {
  return (
    <StyledHeader>
      {/* LEFT SIDE */}
      <NavLink to={'/'} className="link-logo">
        <StyledIconLogo />
        <StyledTitle>TechHaven</StyledTitle>
      </NavLink>

      {/* RIGHT SIDE */}
      <StyledFlexDiv $direction="row">
        {/* SEARCH BAR */}
        <StyledFlexDiv className="icon-position search-input">
          <StyledSearchInput />
          <StyledWrapperButton>
            <StyledIcon />
          </StyledWrapperButton>
        </StyledFlexDiv>
        {/* Language button */}
        <div style={{ marginLeft: '24px', height: '23px', width: '70px', backgroundColor: '#fff' }}>
          UA
        </div>
        {/* ICONS */}
        <StyledIconShipping />
        <Link to="auth">
          <StyledIconProfile />
        </Link>
        {/* MOBILE MENU */}
        <StyledMenuButton>
          <StyledIconMenu />
        </StyledMenuButton>
      </StyledFlexDiv>
    </StyledHeader>
  );
};
