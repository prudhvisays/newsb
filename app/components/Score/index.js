import React from 'react';

export default class Score extends React.Component { //eslint-disable-line
  render() {
    const { score, subTitle } = this.props;
    return (
      <div className="ink-flex vertical push-middle" style={{ padding: '0.4em' }}>
        <div className="main fw-700 extralarge">{score}</div>
        <div className="sub-title">{subTitle}</div>
      </div>
    );
  }
}
