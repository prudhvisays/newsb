import React from 'react';
import Select, { Option } from 'rc-select';

export default class AddSelect extends React.Component { //eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {
      useAnim: 0,
      value: [],
    }
    this.onChange = this.onChange.bind(this);
    this.useAnim = this.useAnim.bind(this);
  }

  onChange(value) {
    console.log('onChange', value);
    this.props.pilotSelect(value);
  }
  useAnim(e) {
    this.setState({
      useAnim: e.target.checked,
    });
  }
  render() {
    const filteredPilots = this.props.selectedPilots && this.props.selectedPilots.map((pilot) => (
        <Option key={pilot._id} text={pilot.user.firstName}>{pilot.user.firstName}</Option>
      ));
    return (
      <Select
        allowClear
        placeholder="Select Pilot"
        style={{ width: '100%' }}
        animation="slide-up"
        showSearch={false}
        optionLabelProp="children"
        optionFilterProp="text"
        onChange={this.onChange}
        >
          {filteredPilots}
        </Select>
    );
  }
}
