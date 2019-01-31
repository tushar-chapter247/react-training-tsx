import { isWidthUp } from '@material-ui/core/withWidth';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import API from '../../shared/api';
import Nav from '../nav';
import ProductPage from './product.page';
import './products.css';

interface IProps extends RouteComponentProps<any> {
  width: any;
}
interface IStates {
  products: any[]
}

class Product extends Component<IProps, IStates | any> {
  public state = {
    products: []
  }

  public componentDidMount = async() => {
    await this.getProductsData();
  }

  public getGridListCols = (): number => {
    if (isWidthUp('xl', this.props.width)) {
      return 4;
    }
    if (isWidthUp('lg', this.props.width)) {
      return 3;
    }
    if (isWidthUp('md', this.props.width)) {
      return 2;
    }
    return 1;
  };

  public getProductsData = async() => {
    try {
      const response = await API.get(
        '?results=20&format=json',
      );
      this.setState({ products: response.data.results });      
      return;
    } catch (error) {
      console.log('article error ', error);
    }
  }

  public navigateToDetails = (data: any): void => {
    if (data.value) {
      this.props.history.push({
        pathname: '/product-details/' + data.value,
        state: { id: data.value}
      });
    }
  }

  public render() {
    return (
      <>
        <Nav />
        <ProductPage products={this.state.products} navigateToDetails={this.navigateToDetails} getGridListCols={this.getGridListCols} />
      </>
    );
  }
}

export default Product;
