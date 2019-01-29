import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import API from '../../shared/api';
import { addArticle } from '../../store/actions';
import Nav from '../nav';
import ArticlePage from './article.page';

interface IArticles {
  articles: any[];
}

interface IDispatchFromProps {
  articleActionDispatch: (payload: IArticles) => void;
}

interface IArticlePropTypes extends IDispatchFromProps {}

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
      const response = await API.get('/users');
      const payload: IArticles = { articles: response.data.data }; // CREATE PAYLOAD TO SEND
      this.props.articleActionDispatch(payload); // STORE ALL ARTICLES IN STORE
      this.setState({ articles: response.data.data });
      return;
    } catch (error) {
      console.log('article error ', error);
    }
  };

  public render() {
    return (
      <>
        <Nav />
        <ArticlePage articles={this.state.articles} />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchFromProps => ({
  articleActionDispatch: (payload: IArticles) => dispatch(addArticle(payload)), // THIS FUNCTION WILL BE AVAILABLE IN PROPS
});

export default connect<null, IDispatchFromProps, void>(
  null,
  mapDispatchToProps,
)(Article);
