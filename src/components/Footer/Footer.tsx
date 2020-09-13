import React, { FC } from 'react';
import { useSpatialNavigation } from '../../hooks/useSpatialNavigation';

const Footer: FC = () => {
  useSpatialNavigation("#footer a");

  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="content">
          <p>
            JSJamTV JavaScript Network Television 2020 |{" "}
            <a href="https://twitter.com/le_brande">Twitter</a> |{" "}
            <a href="https://github.com/lebrande">Github</a> |{" "}
            <a href="https://www.youtube.com/channel/UCqawL4rsFulZi1zjpromBNQ">
              YouTube
              </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;