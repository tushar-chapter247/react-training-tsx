// reducers index tsx file

import { ADD_ARTICLE } from '../actions/constants/action-types';

interface IArticles {
  articles: any[];
}

interface IActionType {
  type: string;
  payload: IArticles;
}

const initialState: IArticles = {
  articles: [],
};

function rootReducer(state = initialState, action: IActionType) {
  if (action.type === ADD_ARTICLE) {
    state.articles.push(action.payload);
  }
  return state;
}

export default rootReducer;
