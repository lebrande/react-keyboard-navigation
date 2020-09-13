import React, { useEffect, FC } from 'react';
import SpatialNavigation from 'spatial-navigation-js';
import Ribbon from '../Ribbon/Ribbon';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import App from '../App/App';

const Root: FC = () => {
  useEffect(() => {
    SpatialNavigation.init();
    SpatialNavigation.focus();
  }, []);

  return (
    <>
      <Ribbon />
      <Header />
      <App />
      <Footer />
    </>
  );
};

export default Root;
