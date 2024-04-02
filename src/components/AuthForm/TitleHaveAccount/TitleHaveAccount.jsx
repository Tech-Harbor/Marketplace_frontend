import { useDispatch } from 'react-redux';
import { StyledText } from './TitleHaveAccount.styled.js';
import { showTypeForm } from '../../../redux/auth/slices.js';
import { PAGE } from '../../../constants/constants.js';

const TitleHaveAccount = () => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(showTypeForm(PAGE.RESET_PSW));

  return (
    <StyledText className="text">
      Вже маєте акаунт?
      {/*<NavLink to={'/auth'} className="text">*/}
      {/*  Увійти*/}
      {/*</NavLink>    */}
      <button onClick={handleClick} className="text">
        Увійти
      </button>
    </StyledText>
  );
};

export default TitleHaveAccount;
