// actions index tsx file

import { ADD_ARTICLE } from './constants/action-types';

interface IArticles {
  articles: any[];
}

export function addArticle(payload: IArticles) {
  return { type: ADD_ARTICLE, payload };
}
