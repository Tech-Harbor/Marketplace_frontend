import { StyledText } from './TitleHaveAccount.styled.js';
import PropTypes from 'prop-types';

const TitleHaveAccount = ({ setRegisterMode }) => {
  return (
    <StyledText className="text">
      Вже маєте акаунт?
      {/*<NavLink to={'/auth'} className="text">*/}
      {/*  Увійти*/}
      {/*</NavLink>    */}
      <button onClick={() => setRegisterMode(false)} className="text">
        Увійти
      </button>
    </StyledText>
  );
};

export default TitleHaveAccount;

TitleHaveAccount.propTypes = {
  setRegisterMode: PropTypes.func.isRequired,
};
