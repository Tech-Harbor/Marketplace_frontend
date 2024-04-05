import { StyledText } from './RegisterTerms.styled.js';
import { NavLink } from 'react-router-dom';

export const RegisterTerms = () => {
  return (
    <StyledText>
      Реєструючись, ви погоджуєтесь з умовами <br />
      <NavLink to={'/'} className="text">
        положення про обробку і захист персональних даних
      </NavLink>
      <span> та </span>
      <NavLink to={'/'} className="text">
        угодою користувача
      </NavLink>
    </StyledText>
  );
};
