/**
*
* ProjectRankTable
*
*/

import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

class ProjectRankTable extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>Title</TableHeaderColumn>
                <TableHeaderColumn>Description</TableHeaderColumn>
                <TableHeaderColumn>Creativity</TableHeaderColumn>
                <TableHeaderColumn>Impact</TableHeaderColumn>
                <TableHeaderColumn>Viability</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableRowColumn>Ten-x Hacking thing</TableRowColumn>
                <TableRowColumn>things akdjfhslkdfhsldkfjhsfksjfh ksjfhlskfh sfkh sfl</TableRowColumn>
                <TableRowColumn>5</TableRowColumn>
                <TableRowColumn>5</TableRowColumn>
                <TableRowColumn>5</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </MuiThemeProvider>
      </div>
    );
  }
}

ProjectRankTable.propTypes = {

};

export default ProjectRankTable;
