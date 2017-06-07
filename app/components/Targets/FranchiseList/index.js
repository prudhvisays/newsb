import React from 'react';
import Select, { Option } from 'rc-select';
import FranchiseSelectStyle from './FranchiseSelectStyle';

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
  }

  componentDidMount() {
    this.props.getFranchiseList();
  }

  // onSelect(arg) {
  //   console.log(arguments);
  // }
  //
  // clearSelect(value) {
  //   console.log(value)
  // }

  onChange(value) {
    this.emitChanges(value);
  }
  emitChanges(data) {
    this.props.selectFranchise(data);
    this.props.initialiseData();
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
      <FranchiseSelectStyle
        value={selectedFranchise}
        placeholder="Select Franchise"
        dropdownMenuStyle={dropdownMenuStyle}
        style={{ width: '20%', marginLeft: '3em' }}
        animation="slide-up"
        showSearch={false}
        optionLabelProp="children"
        optionFilterProp="text"
        onChange={this.onChange}
        onSelect={this.onSelect}
      >
        <Option key={'All'} title={'Season Boy'}>{'Season Boy'}</Option>
        {franchiseList}
      </FranchiseSelectStyle>
    );
  }
}

