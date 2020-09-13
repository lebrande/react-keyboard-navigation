import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <header className="hero is-light">
      <div className="hero-body">
        <div className="container">
          <Link to="/">
            <h1 className="title">JSJamTV</h1>
          </Link>
          <h2 className="subtitle">JavaScript Network Television</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;