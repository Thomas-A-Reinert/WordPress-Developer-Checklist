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
        {/* <div className="descriptionContainer">
          <a class="btn btn-primary" data-toggle="collapse" onClick="#checklistDescription" role="button" aria-expanded="false" aria-controls="checklistDescription">
              {checklists[selected].description}
          </a>
          <div className="collapse for-print" id="checklistDescription">
              <div className="card card-body">
                  {checklists[selected].summary}
              </div>
          </div>
      </div> */}
        <Details team={team} project_name={project_name} url={url} />
        <Toolbar checklists={checklists} selected={selected} />
        <Status done={done} />
      </div>
    </header>
  );
};

export default Header;
