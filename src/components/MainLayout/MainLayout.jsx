import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import styles from './MainLayout.module.scss';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main className={styles.shell}>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
