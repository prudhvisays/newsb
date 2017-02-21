import React from 'react';

export default class Input extends React.Component { //eslint-disable-line
  render() {
    const { Name, Holder, onChange } = this.props;
    return (
        <div className="ink-flex vertical">
          <div className="sub-title">{Name}</div>
          <div><input type="text" placeholder={Holder} onChange={onChange}></input></div>
        </div>
    );
  }
}
