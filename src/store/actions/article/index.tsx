import { ADD_ARTICLE } from '../action-types';

interface IArticles {
  articles: any[];
}

export const addArticle = (payload: IArticles) => {
  return {
    payload,
    type: ADD_ARTICLE,
  };
};
