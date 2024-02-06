import { Routes, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout/MainLayout.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import ProductsPage from './pages/ProductsPage/ProductsPage.jsx';

import AuthLayout from './components/AuthLayout/AuthLayout.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';

import FormTest from './components/FormForTest/FormTest.jsx';
import FormForTestWithImage from './components/FormForTestWithImage/FormForTestWithImage.jsx';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:name" element={<ProductsPage />} />
        </Route>

        <Route path="" element={<AuthLayout />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route path="/form" element={<FormTest />} />
        <Route path="/formImage" element={<FormForTestWithImage />} />
      </Routes>
    </>
  );
};

export default App;
