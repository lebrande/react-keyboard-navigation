import React, { FC } from 'react';
import { useSpatialNavigation } from "../../hooks/useSpatialNavigation";

type Props = {
  activeView: string;
  setActiveView: (activeView: string) => void;
};

const SidebarMenu: FC<Props> = ({ activeView, setActiveView }) => {
  useSpatialNavigation("#menu a");

  return (
    <aside id="menu" className="menu">
      <p className="menu-label">Watch tv</p>
      <ul className="menu-list">
        <li>
          <a
            href="#"
            onClick={() => {
              setActiveView("grid");
            }}
            className={activeView === "grid" ? "is-active" : ""}
          >
            Channels
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => {
              setActiveView("slider");
            }}
            className={activeView === "slider" ? "is-active" : ""}
          >
            Favorites
          </a>
        </li>
      </ul>
      <p className="menu-label">Get more</p>
      <ul className="menu-list">
        <li>
          <a
            href="#"
            onClick={() => {
              setActiveView("form");
            }}
            className={activeView === "form" ? "is-active" : ""}
          >
            Subscribe to my newsletter
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SidebarMenu;
