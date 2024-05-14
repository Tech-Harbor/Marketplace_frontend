import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header.jsx';
import { Footer } from '../Footer/Footer.jsx';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';
import { FakeBoxForNavBar } from './MainLayout.styled.js';

const MainLayout = () => {
  return (
    <>
      <Header />
      <NavigationBar />

      <main>
        <Outlet />
      </main>

      <Footer />
      <FakeBoxForNavBar />
    </>
  );
};

export default MainLayout;
