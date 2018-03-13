"use strict";
import { h } from "preact-cycle";
import { TOGGLE, SAVE, RESET } from "../reducers/checklist";

const Toolbar = ({ checklists, selected }, { mutate, mutation }) => {
  return (
    <div className="row toolbar">
      <div className="col-md-4 form-group show-on-mobile">
        <label htmlFor="checklist-select">Checklist: </label>
        <select
          id="checklist-select"
          onChange={e => mutate(TOGGLE, e.target.value)}
          className="form-control" 
          value={selected}
        >
          {checklists.map((checklist, i) => {
            return <option value={i}>{checklist.name}</option>;
          })}
        </select>
      </div>
      <div className="col-md-8 mt-auto mb-3 button-toolbar show-on-mobile">
        <div className="pull-right ml-1 mr-1">
          <a className="btn btn-outline-light" href="#" onClick={() => window.print()}>
            <i className="fa fa-print fa-lg" aria-hidden="true"></i> Generate report
          </a>
        </div> 
        <div className="pull-right ml-1 mr-1">
          <a className="btn btn-outline-light" href="#" onClick={mutation(RESET, selected)}>
            <i className="fa fa-refresh fa-lg" aria-hidden="true"></i> Reset
          </a>
        </div> 
        <div className="pull-right ml-1 mr-1">
          <a className="btn btn-outline-light" href="#" onClick={mutation(SAVE)}>
            <i className="fa fa-floppy-o fa-lg" aria-hidden="true"></i> Save
          </a>
        </div>
      </div>
    </div>
  );
};
export default Toolbar;
