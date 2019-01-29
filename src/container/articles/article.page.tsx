import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import './article.css';

interface IActionPropTypes {
  articles: any[];
}

const ArticlePage = (props: IActionPropTypes) => {
  return (
    <div className="mainroot">
      <List className="root">
        {
          props.articles.length ?
          props.articles.map((k, i) => (
            <ListItem className="listItemAlign" key={k.id.value + i}>
              <ListItemAvatar>
                <Avatar alt={k.name.first + ' ' + k.name.last} src={k.picture.medium} />
              </ListItemAvatar>
              <ListItemText
                primary={k.name.first.toUpperCase() + ' ' + k.name.last.toUpperCase()}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      className="inline"
                      color="textPrimary"
                    >
                      {k.cell}
                    </Typography>
                    {" — " + k.email}
                  </React.Fragment>
                }
              />
            </ListItem>
          )) : null
        }
      </List>
    </div>
  );
};

export default ArticlePage;
