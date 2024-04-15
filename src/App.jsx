import { useDispatch } from 'react-redux';
import { Routes, Route, useSearchParams } from 'react-router-dom';

import MainLayout from './components/MainLayout/MainLayout.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import ProductsPage from './pages/ProductsPage/ProductsPage.jsx';
import { setTokenFromEmailLink } from './redux/auth/authSlice.js';

const App = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const resetPasswordToken = searchParams.get('jwt');

  // Set resetPasswordToken after open link from user email
  if (resetPasswordToken) {
    dispatch(setTokenFromEmailLink(resetPasswordToken));
  }

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="category/:name" element={<ProductsPage />} />
      </Route>

      {/*<Route path="api/auth/change-password" element={<ChangePassword />} />*/}
    </Routes>
  );
};

export default App;
