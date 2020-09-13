import React, { FC } from 'react';
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Form from '../Form/Form';
import Channels from '../Channels/Channels';
import Channel from '../Channel/Channel';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import Page from '../Page/Page';

const Routing: FC = () => {
  const location = useLocation();

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-one-quarter">
            <SidebarMenu />
          </div>
          <div className="column">
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
                <Route exact path="/">
                  <Page>
                    <p>Welcome</p>
                  </Page>
                </Route>
                <Route exact path="/form">
                  <Page>
                    <Form />
                  </Page>
                </Route>
                <Route exact path="/videos/:videoId">
                  <Page>
                    <VideoPlayer />
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
  );
};

export default Routing;