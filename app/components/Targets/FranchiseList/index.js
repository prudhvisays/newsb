import React from 'react';
import Select, { Option } from 'rc-select';
import 'rc-select/assets/index.css';


function onDeselect() {
  console.log(arguments);
}
export default class FranchiseUsers extends React.Component { //eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {
      useAnim: 0,
      value: [],
    }
    this.onChange = this.onChange.bind(this);
    this.useAnim = this.useAnim.bind(this);
    this.emitChanges = this.emitChanges.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.clearSelect = this.clearSelect.bind(this);
  }

  componentDidMount() {
    this.props.getFranchiseList();
  }

  onSelect(arg) {
    console.log(arguments);
  }

  clearSelect(value) {
    console.log(value)
  }

  onChange(value) {
    this.emitChanges(value);
  }
  emitChanges(data) {
    this.props.selectFranchise(data);
    this.props.getInfo();
  }
  useAnim(e) {
    this.setState({
      useAnim: e.target.checked,
    });
  }
  render() {
    const { franchises, selectedFranchise } = this.props.franchiseList;
    const dropdownMenuStyle = {
      maxHeight: 200,
      overflow: 'auto',
      borderRadius: 0,
      fontSize: '0.8rem',
    };
    const franchiseList = franchises && franchises.map((list) => (
        <Option key={list._id} title={list.name}>{list.name}</Option>
      ));
    return (
      <Select
        value={selectedFranchise}
        placeholder="Select Franchise"
        dropdownMenuStyle={dropdownMenuStyle}
        style={{ width: '100%' }}
        animation="slide-up"
        showSearch={false}
        optionLabelProp="children"
        optionFilterProp="text"
        onChange={this.onChange}
        onSelect={this.onSelect}
      >
        <Option key={'All'} title={'Season Boy'}>{'Season Boy'}</Option>
        {franchiseList}
      </Select>
    );
  }
}

