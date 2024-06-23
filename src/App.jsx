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
import ProfileSettings from './components/ProfileSettings/ProfileSettings.jsx';
import ProfileChangePassword from './components/ProfileChangePassword/ProfileChangePassword.jsx';
import ProfileChangeEmail from './components/ProfileChangeEmail/ProfileChangeEmail.jsx';
import ProfileHelp from './components/ProfileHelp/ProfileHelp.jsx';
import ProfileTerms from './components/ProfileTerms/ProfileTerms.jsx';
import ProfilePolicy from './components/ProfilePolicy/ProfilePolicy.jsx';
import ProfileUserPosts from './components/ProfileUserPosts/ProfileUserPosts.jsx';
import { Account, Search } from './components/ProfileHelp/index.js';

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
        <Route path="/profile/user-posts" element={<ProfileUserPosts />} />

        <Route path="/profile/settings" element={<ProfileSettings />} />
        <Route path="/profile/settings/change-password" element={<ProfileChangePassword />} />
        <Route path="/profile/settings/change-email" element={<ProfileChangeEmail />} />

        <Route path="/profile/help" element={<ProfileHelp />} />
        <Route path="/profile/help/account" element={<Account />} />
        <Route path="/profile/help/search" element={<Search />} />

        <Route path="/profile/terms" element={<ProfileTerms />} />

        <Route path="/profile/policy" element={<ProfilePolicy />} />
      </Route>
    </Routes>
  );
};

export default App;
