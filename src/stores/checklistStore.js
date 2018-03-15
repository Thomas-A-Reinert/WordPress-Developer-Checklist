import wpPrerequisites from "../checklist/wp-prerequisites-installation-postinstall.json";
import wpSecurity from "../checklist/wp-security.json";
import wpPerformance from "../checklist/wp-performance.json";
import wpDevelopment from "../checklist/wp-development.json";
import wpThemeDevelopment from "../checklist/wp-theme-development.json";
import wpPluginDevelopment from "../checklist/wp-plugin-development.json";

import { load } from "./manage";
import { countStatus, AddGenerateId } from "../utils";

const INITIAL_DATA = {
  checklists: [
    wpPrerequisites,
    wpSecurity,
    wpPerformance,
    wpDevelopment,
    wpThemeDevelopment,
    wpPluginDevelopment
  ],
  done: {
    high: {
      count: 0,
      total: 0
    },
    medium: {
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
  team: "",
  url: ""
};

export const initialState = () => {
  INITIAL_DATA.done = countStatus(INITIAL_DATA.checklists[INITIAL_DATA.selected]);
  return load(AddGenerateId(INITIAL_DATA));
};
