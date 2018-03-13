// import front_end from '../checklist/front-end.json';
// import api_security from '../checklist/api-security.json';
// import seo from '../checklist/seo.json';
// import side_project_marketing from '../checklist/side-project-marketing';

import wp_prerequisites from '../checklist/wp-prerequisites.json';

import {load} from "./manage";
import {countStatus,AddGenerateId} from "../utils";

const INITIAL_DATA = {
  checklists: [
    wp_prerequisites,
    // front_end,
    // api_security,
    // seo,
    // side_project_marketing,
  ],
  done: {
    high:{
      count: 0,
      total: 0
    },
    medium:{
      count: 0,
      total: 0
    },
    low: {
      count: 0,
      total: 0
    }
  },
  selected: 0,
  project_name: "",
  team:""
};


export const initialState = () => {
  INITIAL_DATA.done = countStatus(INITIAL_DATA.checklists[INITIAL_DATA.selected]);
  return load(AddGenerateId(INITIAL_DATA));
};



