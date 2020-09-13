import React, { useEffect, FC } from 'react';
import SpatialNavigation from 'spatial-navigation-js';
import Ribbon from '../Ribbon/Ribbon';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routing from '../Routing/Routing';

const App: FC = () => {
  useEffect(() => {
    SpatialNavigation.init();
    SpatialNavigation.focus();
  }, []);

  return (
    <>
      <Ribbon />
      <Header />
      <Routing />
      <Footer />
    </>
  );
};

export default App;
