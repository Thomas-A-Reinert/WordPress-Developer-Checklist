import wp_prerequisites from '../checklist/wp-prerequisites-installation-postinstall.json';
import wp_development from '../checklist/wp-development.json';
import wp_security from '../checklist/wp-security.json';
import wp_performance from '../checklist/wp-performance.json';

import {load} from "./manage";
import {countStatus,AddGenerateId} from "../utils";

const INITIAL_DATA = {
  checklists: [
    wp_prerequisites,
    wp_security,
    wp_performance,
    wp_development
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
  team:"",
  url:""
};


export const initialState = () => {
  INITIAL_DATA.done = countStatus(INITIAL_DATA.checklists[INITIAL_DATA.selected]);
  return load(AddGenerateId(INITIAL_DATA));
};



