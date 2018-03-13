"use strict";
import { h } from "preact-cycle";
import { TEAM_CHANGE, PROJECT_CHANGE, URL_CHANGE } from "../reducers/checklist";

const Details = ({ project_name, team, url }, { mutate }) => {
  return (
    <div>
      <div className="for-print">
        <h4>
          <strong>Project:</strong> {project_name}
        </h4>
        <h4>
          <strong>Project URL:</strong> {url}
        </h4>
        <h4>
          <strong>Team:</strong> {team}
        </h4>
      </div>
      <div className="row details">
        <div className="col-md-4 form-group">
          <label htmlFor="projectField">Project name</label>
          <input
            placeholder="Project name..."
            className="form-control" 
            id="projectField"
            type="text"
            value={project_name}
            onChange={e => mutate(PROJECT_CHANGE, e.target.value)}
          />
        </div>
        <div className="col-md-4 form-group">
          <label htmlFor="urlField">Project URL</label>
          <input
            placeholder="https://"
            className="form-control" 
            id="urlField"
            type="url"
            value={url}
            onChange={e => mutate(URL_CHANGE, e.target.value)}
          />
        </div>
        <div className="col-md-4 form-group">
          <label htmlFor="teamField">Team name</label>
          <input
            placeholder="Team..."
            className="form-control" 
            id="teamField"
            type="text"
            value={team}
            onChange={e => mutate(TEAM_CHANGE, e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
