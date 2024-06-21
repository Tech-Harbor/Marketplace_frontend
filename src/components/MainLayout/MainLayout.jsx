import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header.jsx';
import { Footer } from '../Footer/Footer.jsx';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';
import { Advertisement } from '../Advertisement/Advertisement.jsx';

import { Wrapper, Main } from './MainLayout.styled.js';

const MainLayout = () => {
  return (
    <>
      <Header />

      <NavigationBar />

      <Wrapper>
        <Advertisement />

        <Main>
          <Outlet />
        </Main>
      </Wrapper>

      <Footer />
    </>
  );
};

export default MainLayout;
