import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { setResetPasswordToken, showTypeForm } from './redux/auth';
import { useActivateUser } from './hooks';
import { TYPE_FORM } from './constants';

import MainLayout from './components/MainLayout/MainLayout.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import Profile from './components/Profile/Profile.jsx';
import ProductsPage from './pages/ProductsPage/ProductsPage.jsx';
import NewPost from './components/NewPost/NewPost.jsx';

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

        <Route path="/new-post" element={<NewPost />} />
        <Route path="/favorite" element={<div>favorite</div>} />
        <Route path="/chat" element={<div>chat</div>} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<div>profile/edit</div>} />
        <Route path="/profile/settings" element={<div>profile/settings</div>} />
        <Route path="/profile/help" element={<div>/profile/help</div>} />
        <Route path="/profile/terms" element={<div>/profile/terms</div>} />
        <Route path="/profile/policy" element={<div>/profile/policy</div>} />
        <Route path="/profile/user-posts" element={<div>/profile/user-posts</div>} />
      </Route>
    </Routes>
  );
};

export default App;
