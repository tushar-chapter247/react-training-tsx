import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';
import React from 'react';
import UpperCaseFirst from '../../shared/component/uppercase-first';
import './product-details.css';

interface IPropTypes {
  userData: any
}

const ProductDetailsPage = (props: IPropTypes) => {
  return (
    <>
      <h2>
        This is product details page, showing any random data as due to fake api
      </h2>
      <br />
      <Card className="pcard">
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className="pavatar">
              {props.userData && props.userData.name ? props.userData.name.first.charAt(0).toUpperCase() : null}
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={props.userData && props.userData.name ? <UpperCaseFirst text={props.userData.name.first + ' ' + props.userData.name.last} /> : null}
          subheader={props.userData && props.userData.email ? props.userData.email : null}
        />
        <CardMedia
          className="pmedia"
          image={props.userData && props.userData.picture ? props.userData.picture : "/static/images/cards/paella.jpg"}
          title="Paella dish"
        />
        <CardContent>
          <Typography component="p">
            {props.userData && props.userData.location ? props.userData.location.street + ' ' + props.userData.location.city + ' ' + props.userData.location.state + ' ' + props.userData.location.zip : <strong>Loading Data ...</strong>}
          </Typography>
        </CardContent>
        <CardActions className="pactions" disableActionSpacing={true}>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductDetailsPage;
