import { Routes, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout/MainLayout.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import ProductsPage from './pages/ProductsPage/ProductsPage.jsx';
// import ChangePassword from './components/ChangePassword/ChangePassword.jsx';

const App = () => {
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
