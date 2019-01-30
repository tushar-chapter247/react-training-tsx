import { combineReducers, Reducer } from 'redux';
import accountReducer from './account';
import articleReducer from './article';

interface ISignup {
  name: string;
  email: string;
  password: string;
}

interface ILogin {
  email: string;
  password: string;
}

interface IArticles {
  articles: any[];
}

const rootReducer: Reducer<{
  accountReducer: ILogin | ISignup;
  articleReducer: IArticles;
}> = combineReducers({
  accountReducer,
  articleReducer,
});

export default rootReducer;
