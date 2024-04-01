import { StyledText } from './TitleHaveAccount.styled.js';
import PropTypes from 'prop-types';

const TitleHaveAccount = ({ setModeModal }) => {
  return (
    <StyledText className="text">
      Вже маєте акаунт?
      {/*<NavLink to={'/auth'} className="text">*/}
      {/*  Увійти*/}
      {/*</NavLink>    */}
      <button onClick={() => setModeModal('login')} className="text">
        Увійти
      </button>
    </StyledText>
  );
};

export default TitleHaveAccount;

TitleHaveAccount.propTypes = {
  setModeModal: PropTypes.func.isRequired,
};
