import { FETCH_PROJECT } from '../actions/index';
const INITIAL_STATE = { 
  heroImage: "",
  heroBody: "",
  heroButtonText: "",
  heroHeader: "",
  contentBlock: []
 };
export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_PROJECT:
    return { ...state, 
      heroImage: action.payload.items[0].fields.hero.fields.heroImage.fields.file.url,
      heroHeader: action.payload.items[0].fields.hero.fields.heroHeader,
      heroBody: action.payload.items[0].fields.hero.fields.heroBody,
      heroButtonText: action.payload.items[0].fields.hero.fields.heroButtonText,
      contentBlock:  action.payload.items[0].fields.contentBlock
    
    };
  default:
    return state;
  }
}
