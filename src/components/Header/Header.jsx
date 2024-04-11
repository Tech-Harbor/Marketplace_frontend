import { NavLink } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm.jsx';

import {
  StyledHeader,
  StyledIcon,
  StyledIconLogo,
  StyledIconMenu,
  StyledIconShipping,
  StyledMenuButton,
  StyledSearchInput,
  StyledTitle,
  StyledWrapperButton,
} from './Header.styled.js';
import { StyledFlexDiv } from '../AuthForm/typeForms/typeForms.styled.js';
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

        <AuthForm />

        {/* MOBILE MENU */}
        <StyledMenuButton>
          <StyledIconMenu />
        </StyledMenuButton>
      </StyledFlexDiv>
    </StyledHeader>
  );
};
