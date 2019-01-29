import React, { Component } from 'react';
import API from '../../shared/api';
import ArticlePage from './article.page';

interface IArticlePropTypes {}

interface IStateTypes {
  articles: any[];
}

class Article extends Component<IArticlePropTypes, IStateTypes> {
  public state = {
    articles: [],
  };

  public componentDidMount = async () => {
    await this.getArticles();
  };

  public getArticles = async () => {
    try {
      const response = await API.get('/users?page=2');
      console.log('article response: ', response.data.data);
      this.setState({ articles: response.data.data });
      return;
    } catch (error) {
      console.log('article error ', error);
    }
  };

  public render() {
    return (
      <>
        <ArticlePage articles={this.state.articles} />
      </>
    );
  }
}

export default Article;
