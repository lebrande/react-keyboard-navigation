import React from "react";
import { useSpatialNavigation } from "../../hooks/useSpatialNavigation";

const Grid = () => {
  useSpatialNavigation('#grid .tile.is-child');

  return (
    <div id="grid" className="tile is-ancestor">
      <div className="tile is-vertical is-8">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child notification is-primary">
              <p className="title">Channel 1</p>
              <p className="subtitle">Sit amet luctus</p>
            </article>
            <article className="tile is-child notification is-warning">
              <p className="title">Channel 2</p>
              <p className="subtitle">Egestas sed sed risus</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-info">
              <p className="title">Channel 3</p>
              <p className="subtitle">Maecenas accumsan lacus vel</p>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-danger">
            <p className="title">Channel 4</p>
            <p className="subtitle">Semper risus</p>
            <div className="content">Id volutpat lacus laoreet non curabitur.</div>
          </article>
        </div>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification is-success">
          <div className="content">
            <p className="title">Channel 5</p>
            <p className="subtitle">Suscipit tellus mauris</p>
            <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed.</div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Grid;
