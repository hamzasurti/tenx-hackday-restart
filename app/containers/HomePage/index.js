/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Toggle from 'material-ui/Toggle';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import ProjectCard from './../../components/ProjectCard';
import ProjectRankTable from './../../components/ProjectRankTable';
const styleFLex = {
  // display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '100%',
};

const styleCol = {
  flex: '1',
  width: '32%',
};

const styleAdd = {
  position: 'sticky',
  top: '90%',
  left: '90%',
};

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    toggleDisplay: true,
  }

  handleToggle = () => this.setState({ toggleDisplay: !this.state.toggleDisplay });

  render() {
    return (
      <div style={styleFLex} >
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Toggle
            label="Simple"
            onToggle={this.handleToggle}
          />
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <FloatingActionButton style={styleAdd}>
            <ContentAdd />
          </FloatingActionButton>
        </MuiThemeProvider>
        {!this.state.toggleDisplay && (
          <div>
            <ProjectCard style={styleCol} />
            <ProjectCard style={styleCol} />
            <ProjectCard style={styleCol} />
            <ProjectCard style={styleCol} />
            <ProjectCard style={styleCol} />
            <ProjectCard style={styleCol} />
            <ProjectCard style={styleCol} />
          </div>
          )
        }
        {this.state.toggleDisplay && <ProjectRankTable />}
      </div>

    );
  }
}
