import axios from 'axios';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Nav from '../nav';
import ProductDetailsPage from './product-details.page';

interface IProps extends RouteComponentProps<any> {};
interface IStates {
  userData: any;
};

class ProductDetails extends Component<IProps, IStates> {
  public state = {
    userData: null
  }

  public componentDidMount = async() => {
    await this.getRandomUser();
  }

  public getRandomUser = async() => {
    await axios.get('https://randomuser.me/api/0.4/?randomapi')
      .then((res: any) => {
        console.log('user data: ', res.data.results[0].user);
        this.setState({
          userData: res.data.results[0].user
        });
      })
      .catch(err => console.log('user data error: ', err));
  }

  public render () {
    return (
      <>
        <Nav />
        <ProductDetailsPage userData={this.state.userData} />
      </>
    );
  }
}

export default ProductDetails;
