import { Routes, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout/MainLayout.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import ProductsPage from './pages/ProductsPage/ProductsPage.jsx';

import AuthLayout from './components/AuthLayout/AuthLayout.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="category/:name" element={<ProductsPage />} />
      </Route>

      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default App;
