import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { device } from '../../utils';

import { Header } from '../Header/Header.jsx';
import { Footer } from '../Footer/Footer.jsx';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';
import { Advertisement } from '../Advertising/Advertisement.jsx';

const Wrapper = styled.div`
  width: 100%;
`;

const Main = styled.main`
  max-width: 1440px;
  padding: 0 16px;
  margin: 0 auto;

  @media ${device.laptop} {
    padding: 0 100px;
  }
`;

const MainLayout = () => {
  return (
    <>
      <Header />

      <Wrapper>
        <Advertisement />
        <Main>
          <Outlet />
        </Main>
      </Wrapper>

      <Footer />

      <NavigationBar />
    </>
  );
};

export default MainLayout;
