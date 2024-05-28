import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { setResetPasswordToken, showTypeForm } from './redux/auth';
import { useActivateUser } from './hooks';
import { TYPE_FORM } from './constants';

import ProductsPage from './pages/ProductsPage/ProductsPage.jsx';
import MainLayout from './components/MainLayout/MainLayout.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import Announcement from './pages/Announcement/Announcement.jsx';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { sendRegistrationToken } = useActivateUser();

  const regtoken = searchParams.get('regtoken');
  const chptoken = searchParams.get('chptoken');

  useEffect(() => {
    if (regtoken) {
      console.log('regtoken');
      sendRegistrationToken(regtoken);
      searchParams.delete('regtoken');
      searchParams.set('auth_modal', 'true');
      navigate(location.pathname + '?' + searchParams.toString(), { replace: true });
      dispatch(showTypeForm(TYPE_FORM.LOGIN));
    }

    if (chptoken) {
      dispatch(setResetPasswordToken(chptoken));
      dispatch(showTypeForm(TYPE_FORM.RESET_PSW));
      searchParams.delete('chptoken');
      searchParams.set('auth_modal', 'true');
      navigate(location.pathname + '?' + searchParams.toString(), { replace: true });
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="category/:name" element={<ProductsPage />} />

        {/* Для цих роутів тимчасово визначено element={<HomePage />}*/}
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/favorite" element={<HomePage />} />
        <Route path="/chat" element={<HomePage />} />
        <Route path="/profile" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
