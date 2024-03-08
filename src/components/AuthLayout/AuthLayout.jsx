import { Outlet } from 'react-router-dom';

import { MainContainer } from './AuthLayout.styled.js';

const AuthLayout = () => {
  return (
    <MainContainer>
      <Outlet />
    </MainContainer>
  );
};

export default AuthLayout;
