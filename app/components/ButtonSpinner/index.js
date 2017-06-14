import React from 'react';
import SpinnerStyle from './SpinnerStyle';

export default class ButtonSpinner extends React.Component { //eslint-disable-line

  render() {
    return (
      <SpinnerStyle>
        <div className="bubble bubble--1"></div>
        <div className="bubble bubble--2"></div>
        <div className="bubble bubble--3"></div>
        <div className="bubble bubble--4"></div>
        <div className="bubble bubble--5"></div>
      </SpinnerStyle>
    );
  }
}
