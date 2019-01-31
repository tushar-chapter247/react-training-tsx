import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ListSubheader from '@material-ui/core/ListSubheader';
import InfoIcon from '@material-ui/icons/Info';
import React from 'react';
import './products.css';

interface IPropTypes {
  getGridListCols: any;
}

const ProductPage = (props: IPropTypes) => {
  return (
    <div className="product-container">
      <div className="product-root">
        <GridList cellHeight={180} cols={props.getGridListCols} className="product-gridList">
          <GridListTile>
            <img src={require('../../assets/images/1.jpeg')} alt="" />
            <GridListTileBar
              title="Dummy title"
              subtitle={<span>by: A dummy author</span>}
              actionIcon={
                <IconButton className="product-icon">
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile>
            <img src={require('../../assets/images/2.jpeg')} alt="" />
            <GridListTileBar
              title="Dummy title"
              subtitle={<span>by: A dummy author</span>}
              actionIcon={
                <IconButton className="product-icon">
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile>
            <img src={require('../../assets/images/1.jpeg')} alt="" />
            <GridListTileBar
              title="Dummy title"
              subtitle={<span>by: A dummy author</span>}
              actionIcon={
                <IconButton className="product-icon">
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile>
            <img src={require('../../assets/images/2.jpeg')} alt="" />
            <GridListTileBar
              title="Dummy title"
              subtitle={<span>by: A dummy author</span>}
              actionIcon={
                <IconButton className="product-icon">
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile>
            <img src={require('../../assets/images/1.jpeg')} alt="" />
            <GridListTileBar
              title="Dummy title"
              subtitle={<span>by: A dummy author</span>}
              actionIcon={
                <IconButton className="product-icon">
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile>
            <img src={require('../../assets/images/2.jpeg')} alt="" />
            <GridListTileBar
              title="Dummy title"
              subtitle={<span>by: A dummy author</span>}
              actionIcon={
                <IconButton className="product-icon">
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        </GridList>
      </div>
    </div>
  );
};

export default ProductPage;
