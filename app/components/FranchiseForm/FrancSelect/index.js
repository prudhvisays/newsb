import React from 'react';
import Select, { Option } from 'rc-select';
import 'rc-select/assets/index.css';
import './FrancSelect.css';

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(
    <Option key={i.toString(36) + i} disabled={i === 10} title={`${i}`}>
      SeasonBoy{i}
    </Option>
  );
}
function onSelect() {
  console.log(arguments);
}

function onDeselect() {
  console.log(arguments);
}
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
    this.setState({
      value,
    });
  }
  useAnim(e) {
    this.setState({
      useAnim: e.target.checked,
    });
  }
  render() {
    const dropdownMenuStyle = {
      maxHeight: 200,
      overflow: 'auto',
      borderRadius: 0,
      fontSize: '0.8rem',
    };
    return (
      <Select
          value={this.state.value}
          animation={this.state.useAnim ? 'slide-up' : null}
          choiceTransitionName="rc-select-selection__choice-zoom"
          dropdownMenuStyle={dropdownMenuStyle}
          style={{ width: '100%' }}
          multiple
          optionFilterProp="children"
          optionLabelProp="children"
          onSelect={onSelect}
          onDeselect={onDeselect}
          placeholder="Select Pilots"
          onChange={this.onChange}
          tokenSeparators={[' ', ',']}
        >
          {children}
        </Select>
    );
  }
}
