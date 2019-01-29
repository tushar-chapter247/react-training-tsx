import React, { Component } from 'react';
import API from '../../shared/api';
import ArticlePage from './article.page';

class Article extends Component {
  public componentDidMount = async () => {
    await this.getArticles();
  };

  public getArticles = async () => {
    try {
      const response = await API.get('/users?page=2');
      console.log('article response: ', response);
      return;
    } catch (error) {
      console.log('article error ', error);
    }
  };

  public render() {
    return (
      <>
        <ArticlePage />
      </>
    );
  }
}

export default Article;
