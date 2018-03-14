"use strict";
import { h } from "preact-cycle";
import Toolbar from "./toolbar";
import Status from "./status";
import Details from "./details";

const Header = ({ checklists, selected, done, team, project_name, url }) => {
  return (
    <header>
      <div className="container">
        <h2 className="checklist-name">
          Checklist: <strong>{checklists[selected].name}</strong>
        </h2>
        <div className="descriptionContainer">
          <p className="h6">{checklists[selected].description}</p>
          <p>{checklists[selected].summary}</p>
          <hr/>
        </div>
        <Details team={team} project_name={project_name} url={url} />
        <Toolbar checklists={checklists} selected={selected} />
        <Status done={done} />
      </div>
    </header>
  );
};

export default Header;
