import React, { FC } from 'react';
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Channels from '../Channels/Channels';
import Channel from '../Channel/Channel';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import Page from '../Page/Page';

const App: FC = () => {
  const location = useLocation();

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
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
                <Route exact path="/">
                  <Page>
                    <Channels />
                  </Page>
                </Route>
                <Route>
                  <Page>
                    <p>Not found 404</p>
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

export default App;