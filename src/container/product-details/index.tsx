import React, { Component } from 'react';
import Nav from '../nav';
import ProductDetailsPage from './product-details.page';

class ProductDetails extends Component {
  public render () {
    return (
      <>
        <Nav />
        <ProductDetailsPage />
      </>
    );
  }
}

export default ProductDetails;
