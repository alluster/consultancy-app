import { combineReducers } from 'redux';
import ProjectsReducer from './projects_reducer';
import ProjectReducer from './project_reducer';

const rootReducer = combineReducers({
  projects: ProjectsReducer,
  project: ProjectReducer
});
export default rootReducer;
