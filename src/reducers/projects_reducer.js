import { FETCH_PROJECTS } from '../actions/index';
const INITIAL_STATE = { all: [] };
export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_PROJECTS:
    return { ...state, all: action.payload.items };
  default:
    return state;
  }
}
