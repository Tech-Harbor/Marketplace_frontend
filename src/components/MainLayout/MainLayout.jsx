import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../utils/index.js';

import { Header } from '../Header/Header.jsx';
import { Footer } from '../Footer/Footer.jsx';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Main = styled.main`
  max-width: 1440px;
  padding: 0 16px;

  @media ${device.laptop} {
    padding: 0 100px;
  }
`;

const MainLayout = () => {
  return (
    <>
      <Header />

      <Wrapper>
        <Main>
          <Outlet />
        </Main>
      </Wrapper>

      <Footer />
    </>
  );
};

export default MainLayout;
