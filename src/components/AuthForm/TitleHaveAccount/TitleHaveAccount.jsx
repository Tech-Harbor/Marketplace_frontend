import { useDispatch } from 'react-redux';
import { StyledText } from './TitleHaveAccount.styled.js';
import { showAuthPage } from '../../../redux/auth/slices.js';
import { PAGE } from '../../../constants/constants.js';

const TitleHaveAccount = () => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(showAuthPage(PAGE.LOGIN));

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
