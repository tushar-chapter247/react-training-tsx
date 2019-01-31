import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import React, { Component } from 'react'
import Nav from '../nav';
import ProductPage from './product.page';
import './products.css';

interface IProps {
  width: any;
};
interface IStates {};

class Product extends Component<IProps, IStates | any> {

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
  }

  public render () {
    return (
      <>
        <Nav />
        <ProductPage getGridListCols={this.getGridListCols} />
      </>
    )
  }
}

export default Product;
