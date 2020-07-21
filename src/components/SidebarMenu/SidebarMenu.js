import React from "react";
import { useSpatialNavigation } from "../../hooks/useSpatialNavigation";

const SidebarMenu = ({ activeView, setActiveView }) => {
  useSpatialNavigation('#menu a');

  return (
    <aside id="menu" className="menu">
      <p className="menu-label">Examples</p>
      <ul className="menu-list">
        <li>
          <a
            href="#"
            onClick={() => {
              setActiveView('form');
            }}
            className={activeView === 'form' ? 'is-active' : ''}
          >
            Form
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => {
              setActiveView('grid');
            }}
            className={activeView === 'grid' ? 'is-active' : ''}
          >
            Grid
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => {
              setActiveView('slider');
            }}
            className={activeView === 'slider' ? 'is-active' : ''}
          >
            Image Slider
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SidebarMenu;
