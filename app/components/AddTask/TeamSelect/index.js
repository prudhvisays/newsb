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

  onChange(e) {
    let value;
    if (e && e.target) {
      value = e.target.value;
    } else {
      value = e;
    }
    this.props.teamSelect(value);
  }

  render() {
    const select = this.props.stateTeamList && this.props.stateTeamList.map((team) => (
        <Option key={team._id}  text={team.name}>{team.name}</Option>
      ));
    return (
      <Select
        allowClear
        placeholder="Select Team"
        style={{ width: '100%' }}
        animation="slide-up"
        showSearch={true}
        optionLabelProp="children"
        optionFilterProp="text"
        onChange={this.onChange}
      >
        {select}
      </Select>
    );
  }
}
