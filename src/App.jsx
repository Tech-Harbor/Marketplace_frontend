import { Routes, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout/MainLayout.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import ProductsPage from './pages/ProductsPage/ProductsPage.jsx';

const App = () => {
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
