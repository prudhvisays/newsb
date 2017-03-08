import React from 'react';

class FormInput extends React.Component { //eslint-disable-line
  render() {
    const { holder, name, type, title, change, value } = this.props
    return (
      <div>
        <div className="fw-700 sub-title">{title}</div>
        <div className="area"><input type={type} placeholder={holder} name={name} onChange={change} value={value} /></div>
      </div>
    );
  }
}

export default FormInput;
