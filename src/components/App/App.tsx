import React, { useEffect, FC } from 'react';
import SpatialNavigation from 'spatial-navigation-js';
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Form from '../Form/Form';
import Channels from '../Channels/Channels';
import Channel from '../Channel/Channel';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import Ribbon from '../Ribbon/Ribbon';
import { useSpatialNavigation } from '../../hooks/useSpatialNavigation';
import Page from '../Page/Page';

const App: FC = () => {
  useEffect(() => {
    SpatialNavigation.init();
    SpatialNavigation.focus();
  }, []);
  useSpatialNavigation("#footer a");
  const location = useLocation();

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
              <SidebarMenu />
            </div>
            <div className="column">
              <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.key}>
                  <Route exact path="/form">
                    <Page>
                      <Form />
                    </Page>
                  </Route>
                  <Route exact path="/channels/:channelId">
                    <Page>
                      <Channel />
                    </Page>
                  </Route>
                  <Route exact path="/channels">
                    <Page>
                      <Channels />
                    </Page>
                  </Route>
                </Switch>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer">
        <div className="container">
          <div className="content">
            <p>
              JSJamTV JavaScript Network Television 2020 |{" "}
              <a href="https://github.com/lebrande/react-keyboard-navigation">
                Source code
              </a> |{" "}
              <a href="https://twitter.com/le_brande">Twitter</a> |{" "}
              <a href="https://github.com/lebrande">Github</a> |{" "}
              <a href="https://www.youtube.com/channel/UCqawL4rsFulZi1zjpromBNQ">
                youtube [PL]
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
