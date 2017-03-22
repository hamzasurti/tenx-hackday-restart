/**
*
* ProjectCard
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import Paper from 'material-ui/Paper';


// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
const style = {
  height: 400,
  width: 250,
  margin: 20,
  display: 'inline-block',
};

class ProjectCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Paper zDepth={2} rounded={false} style={style}>
            <Card>
              <CardHeader
                title="URL Avatar"
                subtitle="Subtitle"
                avatar="http://cdn1.medicalnewstoday.com/content/images/articles/271157-bananas.jpg"
                actAsExpander
                showExpandableButton
              />
              <CardMedia expandable> {/* eslint-disable-line react/jsx-boolean-value*/}
                <img src="http://cdn1.medicalnewstoday.com/content/im.jpg" role="presentation" />
              </CardMedia>
              <CardTitle title="Card title" subtitle="Card subtitle" />
              <CardText expandable> {/* eslint-disable-line react/jsx-boolean-value*/}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <FlatButton label={<ActionFavorite />} />
                <FlatButton label="-" />
              </CardActions>
            </Card>
          </Paper>
        </MuiThemeProvider>

      </div>
    );
  }
}

ProjectCard.propTypes = {

};

export default ProjectCard;
