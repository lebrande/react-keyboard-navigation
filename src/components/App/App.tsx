import React, { useState, useEffect, FC } from 'react';
import SpatialNavigation from 'spatial-navigation-js';
import Form from '../Form/Form';
import Grid from '../Grid/Grid';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import Ribbon from '../Ribbon/Ribbon';
import Slider from '../Slider/Slider';
import { useSpatialNavigation } from '../../hooks/useSpatialNavigation';

const App: FC = () => {
  const [activeView, setActiveView] = useState<string>('form');

  useEffect(() => {
    SpatialNavigation.init();
    SpatialNavigation.focus();
  }, []);
  useSpatialNavigation("#footer a");

  return (
    <>
      <Ribbon />

      <section className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">JSJamTV</h1>
            <h2 className="subtitle">JavaScript Network Television</h2>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-one-quarter">
              <SidebarMenu
                activeView={activeView}
                setActiveView={setActiveView}
              />
            </div>
            {activeView === "form" && (
              <div className="column">
                <Form />
              </div>
            )}
            {activeView === "grid" && (
              <div className="column">
                <Grid />
              </div>
            )}
            {activeView === "slider" && (
              <div className="column">
                <Slider />
              </div>
            )}
          </div>
        </div>
      </section>

      <footer id="footer" className="footer">
        <div className="container">
          <div className="content">
            <p>
              <a href="https://twitter.com/le_brande">Twitter</a> |{" "}
              <a href="https://github.com/lebrande">Github</a> |{" "}
              <a href="https://www.youtube.com/channel/UCqawL4rsFulZi1zjpromBNQ">
                youtube [PL]
              </a>
            </p>
            <p>JSJamTV JavaScript Network Television 2020</p>
            <p>
              <a href="https://github.com/lebrande/react-keyboard-navigation">
                Github repo
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
