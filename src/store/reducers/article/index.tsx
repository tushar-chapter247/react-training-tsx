import * as actions from '../../actions/action-types';

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

const articleReducer = (state = initialState, action: IActionType) => {
  switch (action.type) {
    case actions.ADD_ARTICLE:
      return {
        ...state,
        articles: action.payload.articles,
      };

    default:
      return state;
  }
};

export default articleReducer;
