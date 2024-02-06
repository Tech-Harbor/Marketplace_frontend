import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { MainContainer } from './AuthLayout.styled.js';

const AuthLayout = () => {
  return (
    <MainContainer>
      <Suspense>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};

export default AuthLayout;
