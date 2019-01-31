import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ListSubheader from '@material-ui/core/ListSubheader';
import InfoIcon from '@material-ui/icons/Info';
import React from 'react';
import './products.css';

interface IPropTypes {
  products: any[];
  navigateToDetails: any;
  getGridListCols: any;
}

const ProductPage = (props: IPropTypes) => {
  return (
    <div className="product-container">
      <h4>
        Note: We are using fake api for showing products (actually it is showing
        user record)
      </h4>
      <div className="product-root">
        <GridList
          cellHeight={180}
          cols={props.getGridListCols}
          className="product-gridList"
        >
          {props.products.length
            ? props.products.map((k, i) => (
                <GridListTile key={k.id.value + i}>
                  <img src={k.picture.large} alt={k.name.first + ' ' + k.name.last} />
                  <GridListTileBar
                    title={k.name.first + ' ' + k.name.last}
                    subtitle={<span>Gender: {k.gender}</span>}
                    actionIcon={
                      // tslint:disable-next-line:jsx-no-lambda
                      <IconButton className="product-icon" onClick={() => props.navigateToDetails(k.id)}>
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))
            : null}
        </GridList>
      </div>
    </div>
  );
};

export default ProductPage;
