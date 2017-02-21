import React from 'react';

export default class TabBlock extends React.Component { //eslint-disable-line
  render() {
    const { tabData, Title } = this.props;
    return (
      <div className="tab-block">
        <div>{Title}</div>
        <div>{tabData}</div>
      </div>
    );
  }
}
