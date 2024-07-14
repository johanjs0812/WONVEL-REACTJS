import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import useClearErrorsOnNavigation from '../../hooks/useClearErrorsOnNavigation';

const MainLayout = ({ children }) => {
  useClearErrorsOnNavigation();

  return (
    <div className="main-layout">
      <Header />
        <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
