/*
 *
 * GradingPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import makeSelectGradingPage from './selectors';
// import messages from './messages';
import GradingSlider from './../../components/GradingSlider';
import VideoPlayer from './../../components/VideoPlayer';


export class GradingPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <VideoPlayer />
        <GradingSlider title="Creativity" />
        <GradingSlider title="Impact" />
        <GradingSlider title="Viability" />
      </div>
    );
  }
}

GradingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  GradingPage: makeSelectGradingPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GradingPage);
