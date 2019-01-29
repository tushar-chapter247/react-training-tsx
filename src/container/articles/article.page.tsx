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
    <>
      <List className="root">
        {
          props.articles.length ?
          props.articles.map((k, i) => (
            <ListItem className="listItemAlign" key={k.id}>
              <ListItemAvatar>
                <Avatar alt={k.first_name + ' ' + k.last_name} src={k.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary="Article title - Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      className="inline"
                      color="textPrimary"
                    >
                      {k.first_name} {k.last_name}
                    </Typography>
                    {" — Some book title - I'll be in your neighborhood…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          )) : null
        }
      </List>
    </>
  );
};

export default ArticlePage;
