import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { setResetPasswordToken, showTypeForm } from './redux/auth';
import { useActivateUser } from './hooks';
import { TYPE_FORM } from './constants';

// import HomePage from './pages/HomePage/HomePage.jsx';
import ProductsPage from './pages/ProductsPage/ProductsPage.jsx';
import MainLayout from './components/MainLayout/MainLayout.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { sendRegistrationToken } = useActivateUser();

  const reg_token = searchParams.get('reg_token');
  const chp_token = searchParams.get('chp_token');

  useEffect(() => {
    if (reg_token) {
      sendRegistrationToken(reg_token);
      searchParams.delete('reg_token');
      searchParams.set('auth_modal', 'true');
      navigate(location.pathname + '?' + searchParams.toString(), { replace: true });
      dispatch(showTypeForm(TYPE_FORM.LOGIN));
    }

    if (chp_token) {
      dispatch(setResetPasswordToken(chp_token));
      dispatch(showTypeForm(TYPE_FORM.RESET_PSW));
      searchParams.delete('chp_token');
      searchParams.set('auth_modal', 'true');
      navigate(location.pathname + '?' + searchParams.toString(), { replace: true });
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="category/:name" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
