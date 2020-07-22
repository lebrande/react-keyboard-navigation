import React, { useState, useEffect } from "react";
import SpatialNavigation from 'spatial-navigation-js';
import Form from "../Form/Form";
import Grid from "../Grid/Grid";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import Ribbon from "../Ribbon/Ribbon";
import Slider from "../Slider/Slider";
import { useSpatialNavigation } from "../../hooks/useSpatialNavigation";

const App = () => {
  const [activeView, setActiveView] = useState('form');

  useEffect(() => {
    SpatialNavigation.init();
    SpatialNavigation.focus();
  }, []);
  useSpatialNavigation('#footer a');

  return (
    <>
      <Ribbon />

      <section className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Keyboard Navigation</h1>
            <h2 className="subtitle">Using tab and arrows</h2>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-one-quarter">
              <SidebarMenu activeView={activeView} setActiveView={setActiveView} />
            </div>
            {activeView === 'form' && (
              <div className="column">
                <Form />
              </div>
            )}
            {activeView === 'grid' && (
              <div className="column">
                <Grid />
              </div>
            )}
            {activeView === 'slider' && (
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
              Keyboard Navigation Example by{" "}
              <a href="https://www.youtube.com/channel/UCqawL4rsFulZi1zjpromBNQ">
                JS Dżem
              </a>{" "}
              | <a href="https://twitter.com/le_brande">@lebrande</a>
              <br />
              <a href="https://github.com/lebrande/react-keyboard-navigation">
                Github repo
              </a>
              <br />
              Styled with <a href="https://bulma.io/">Bulma</a>
              <br />
              Date picker component:{" "}
              <a href="https://react-day-picker.js.org/">react-day-picker</a>
              <br />
              Inspired by <a href="https://usehooks.com/">useHooks(🐠)</a>
              <br />
              Spatial navigation by{" "}
              <a href="https://github.com/luke-chang/js-spatial-navigation">
                js-spatial-navigation
              </a>
              <br />
              <a href="https://tholman.com/github-corners/">github ribbon</a>
              <br />
              animations with {" "}
              <a href="https://www.framer.com/motion/">framer-motion</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
