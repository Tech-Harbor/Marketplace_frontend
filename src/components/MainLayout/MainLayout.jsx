import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../utils/index.js';

import { Header } from '../Header/Header.jsx';
import { Footer } from '../Footer/Footer.jsx';

const Main = styled.main`
  width: 100%;
  padding: 0 16px;
  display: flex;
  justify-content: center;

  @media ${device.laptop} {
    padding: 0 100px;
  }
`;

const MainLayout = () => {
  return (
    <>
      <Header />

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </>
  );
};

export default MainLayout;
