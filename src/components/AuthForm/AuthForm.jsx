import { useSelector } from 'react-redux';
import { Login } from './modalPages/Login.jsx';
import { ResetPassword } from './modalPages/ResetPassword.jsx';
import { Registration } from './modalPages/Registration.jsx';
import { showPageSelector } from '../../redux/auth/selectors.js';
import { PAGE } from '../../constants/constants.js';

const AuthForm = () => {
  const showPage = useSelector(showPageSelector);

  return (
    <>
      {showPage === PAGE.REGISTER && <Registration />}
      {showPage === PAGE.LOGIN && <Login />}
      {showPage === PAGE.RESET_PSW && <ResetPassword />}
    </>
  );
};

export default AuthForm;
