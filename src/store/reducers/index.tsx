import { combineReducers } from 'redux';
import accountReducer from './account';
import articleReducer from './article';

const rootReducer = combineReducers({
  accountReducer,
  articleReducer,
});

export default rootReducer;
