/**
*
* GradingSlider
*
*/

import React from 'react';
// import styled from 'styled-components';
import Slider from 'material-ui/Slider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

class GradingSlider extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    slider: 5,
  };

  handleslider = (event, value) => {
    this.setState({ slider: value });
  };

  render() {
    return (
      <div>
        <p>
          <span>{`${this.props.title}: `}</span>
          <span>{this.state.slider}</span>
        </p>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Slider
            min={0}
            max={10}
            step={1}
            defaultValue={5}
            value={this.state.slider}
            onChange={this.handleslider}
          />
        </ MuiThemeProvider>
      </div>
    );
  }
}

GradingSlider.propTypes = {
  title: String.isRequired,
};

export default GradingSlider;
