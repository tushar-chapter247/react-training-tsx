import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch, Reducer } from 'redux';
import API from '../../shared/api';
import { addArticle } from '../../store/actions';
import Nav from '../nav';
import './article.css';
import ArticlePage from './article.page';

interface IArticles {
  articles: any[];
}

interface IStateToProps {
  storeArticles: any[];
}

interface IDispatchFromProps {
  articleActionDispatch: (payload: IArticles) => void;
}

interface IArticlePropTypes extends IStateToProps, IDispatchFromProps {}

interface IStateTypes {
  articles: any[];
  file: any;
  multipleImages: any[];
}

class Article extends Component<IArticlePropTypes, IStateTypes> {
  public state = {
    articles: [],
    file: '',
    multipleImages: [],
  };

  public componentDidMount = async () => {
    await this.getArticles();
  };

  public getArticles = async () => {
    try {
      const response = await API.get(
        '?results=20&format=json&inc=name,gender,location,email,phone,cell,dob,id,picture',
      );
      const payload: IArticles = { articles: response.data.results }; // CREATE PAYLOAD TO SEND
      this.props.articleActionDispatch(payload); // STORE ALL ARTICLES IN STORE
      // this.setState({ articles: response.data.results }); // WE WILL USE STORE TO SHOW ARTICLES
      return;
    } catch (error) {
      console.log('article error ', error);
    }
  };

  public handleFileChange = (event: any) => {
    const imgs: any[] = [...this.state.multipleImages];
    imgs.push(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files[0]);
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
      multipleImages: imgs,
    });
  };

  public render() {
    return (
      <>
        <Nav />
        <ArticlePage articles={this.props.storeArticles} />
        <br />
        <input type="file" onChange={this.handleFileChange} />
        <h3>Selected image</h3>
        <img src={this.state.file} />
        <br />
        <h3>Gallery</h3>
        <div>
          {this.state.multipleImages.length
            ? this.state.multipleImages.map((k, i) => (
              <>
                <img src={k} />
              </>
            ))
            : null}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: any): IStateToProps => {
  return { storeArticles: state.articleReducer.articles };
};

const mapDispatchToProps = (dispatch: Dispatch): IDispatchFromProps => ({
  articleActionDispatch: (payload: IArticles) => dispatch(addArticle(payload)), // THIS FUNCTION WILL BE AVAILABLE IN PROPS
});

export default connect<IStateToProps, IDispatchFromProps, void>(
  mapStateToProps,
  mapDispatchToProps,
)(Article);
