import React from 'react';

export default class ReInput extends React.Component { //eslint-disable-line
  render() {
    const { Name, Holder, onChange, value, title} = this.props;
    return (
        <div className="ink-flex vertical">
           <div className="sub-title">{title}</div>
          <div><input type="text" placeholder={Holder} onChange={onChange} value={value}  name={Name}/></div>
        </div>
    );
  }
}
