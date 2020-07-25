import React, { FC } from 'react';
import { useSpatialNavigation } from '../../hooks/useSpatialNavigation';
import { NavLink } from 'react-router-dom';

const SidebarMenu: FC = () => {
  useSpatialNavigation("#menu a");

  return (
    <aside id="menu" className="menu">
      <p className="menu-label">Watch tv</p>
      <ul className="menu-list">
        <li>
          <NavLink
            to="grid"
            activeClassName="is-active"
          >
            Channels
          </NavLink>
        </li>
        <li>
          <NavLink
            to="slider"
            activeClassName="is-active"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
      <p className="menu-label">Get more</p>
      <ul className="menu-list">
        <li>
          <NavLink
            to="form"
            activeClassName="is-active"
          >
            Subscribe to my newsletter
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SidebarMenu;
