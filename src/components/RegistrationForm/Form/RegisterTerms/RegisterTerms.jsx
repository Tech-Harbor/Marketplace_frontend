import { StyledText } from './RegisterTerms.styled.js';
import { NavLink } from 'react-router-dom';

const RegisterTerms = () => {
  return (
    <StyledText>
      Реєструючись, ви погоджуєтесь з умовами <br />
      <NavLink to={'/'}>
        <span className="text"> положення про обробку і захист персональних даних </span>
      </NavLink>
      та
      <NavLink to={'/'}>
        <span className="text"> угодою користувача</span>
      </NavLink>
    </StyledText>
  );
};

export default RegisterTerms;
