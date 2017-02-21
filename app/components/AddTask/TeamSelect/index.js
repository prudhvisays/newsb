import React from 'react';
import Select, { Option } from 'rc-select';
import 'rc-select/assets/index.css';

export default class TeamSelect extends React.Component { //eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {
      value: [],
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    console.log(`selected ${value}`);
  }
  render() {
    return (
      <Select
        allowClear
        placeholder="Select Team"
        style={{ width: '100%' }}
        animation="slide-up"
        showSearch={false}
        onChange={(val) => { this.onChange(val); }}
      >
        <Option value="Kondapur">
          <b
            style={{
              color: 'red',
            }}
          >
            Kondapur
          </b>
        </Option>
        <Option value="Madhapur">Madhapur</Option>
        <Option value="disabled" disabled>disabled</Option>
        <Option value="Gachibowli">Gachibowli</Option>
      </Select>
    );
  }
}
