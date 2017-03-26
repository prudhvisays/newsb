import React from 'react';
import Select, { Option } from 'rc-select';
import 'rc-select/assets/index.css';

export default class UserSelect extends React.Component { //eslint-disable-line
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
    if (value === 'isManager') {
      this.props.onUserFormChange({ ...this.props.userInfo, selectAdmin: true, isAdmin: true, isPilot: false, isMerchant: false, isFranchiseAdmin: false, isManager: false });
    } else if(value === 'isCustomer') {
      this.props.onUserFormChange({ ...this.props.userInfo, selectAdmin: false, isMerchant: true, isAdmin: false, isPilot: false, isFranchiseAdmin: false, isManager: false });
    } else if(value === 'isPilot') {
      this.props.onUserFormChange({ ...this.props.userInfo, selectAdmin: false, isPilot: true, isAdmin: false, isMerchant: false, isFranchiseAdmin: false, isManager: false });
    } else if(value === 'isFranchise') {
      this.props.onUserFormChange({ ...this.props.userInfo, selectAdmin: false, isAdmin: false, isPilot: false, isMerchant: false, isFranchiseAdmin: false, isManager: false });
    }
  }

  render() {
    return (
      <Select
        allowClear
        placeholder="Select User Type"
        style={{ width: '100%' }}
        animation="slide-up"
        showSearch={false}
        optionLabelProp="children"
        optionFilterProp="text"
        onChange={this.onChange}
      >
        <Option key={'isManager'}  text={'Manager'}>{'Manger'}</Option>
        <Option key={'isCustomer'}  text={'Customer'}>{'Customer'}</Option>
        <Option key={'isPilot'}  text={'Pilot'}>{'Pilot'}</Option>
        <Option key={'isFranchise'}  text={'Franchise'}>{'Franchise'}</Option>
        <Option key={'Team'}  text={''}>{'Franchise'}</Option>
      </Select>
    );
  }
}
