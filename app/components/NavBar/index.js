/**
*
* NavBar
*
*/

import React from 'react';
import AppBar from 'material-ui/AppBar';
// import styled from 'styled-components';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';
import { MenuItem } from 'material-ui/Menu';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


class NavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <AppBar
            title="Ten-x Hackday"
            onLeftIconButtonTouchTap={this.handleToggle}
          />
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Drawer
            muiTheme={getMuiTheme(darkBaseTheme)}
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({ open })}
          >
            <MenuItem href="/" onTouchTap={this.handleClose}><FormattedMessage {...messages.home} /></MenuItem>
            <MenuItem href="/grade" onTouchTap={this.handleClose}><FormattedMessage {...messages.grade} /></MenuItem>
          </Drawer>
        </MuiThemeProvider>
      </div>
    );
  }
}

NavBar.propTypes = {

};

export default NavBar;
