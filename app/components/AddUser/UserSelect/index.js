import React from 'react';
import Select, { Option } from 'rc-select';
import 'rc-select/assets/index.css';
import { session, userRole, userRoleType } from '../../../Api/ApiConstants';

export default class UserSelect extends React.Component { //eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      userList: [
        {
          title: 'Manager',
          key: 'isManager'
        },
        {
          title: 'Customer',
          key: 'isCustomer',
        },
        {
          title: 'Pilot',
          key: 'isPilot',
        },
        {
          title: 'Franchise',
          key: 'isFranchise',
        },
        {
          title: 'Team',
          key: 'isTeam',
        }
      ],
    };
    this.onChange = this.onChange.bind(this);
    this.franchiseRole = this.franchiseRole.bind(this);
  }

  franchiseRole(form) {
    console.log(userRoleType());
    if(userRoleType() === 'isFranchise') {
      console.info("franchise ROLE");
      this.props.onUserFormChange({ ...form, franchise: Object.values(userRole())[0], isAdmin: false });
    } else {
      console.info("franchise ROle false")
      this.props.onUserFormChange(form);
    }
  }

  onChange(e) {
    let value;
    let form;
    if (e && e.target) {
      value = e.target.value;
    } else {
      value = e;
    }
    if (value === 'isManager') {
       form = { ...this.props.userInfo, selectAdmin: true, isAdmin: true, isPilot: false, isMerchant: false, isFranchiseAdmin: false, isManager: false, isTeam: false, isFranchise: false, };
        this.franchiseRole(form);
    } else if(value === 'isCustomer') {
      form = { ...this.props.userInfo, selectAdmin: false, isMerchant: true, isAdmin: false, isPilot: false, isFranchiseAdmin: false, isManager: false, isTeam: false,isFranchise: false, };
      this.franchiseRole(form);
    } else if(value === 'isPilot') {
      form = { ...this.props.userInfo, selectAdmin: false, isPilot: true, isAdmin: false, isMerchant: false, isFranchiseAdmin: false, isManager: false, isTeam: false,isFranchise: false, };
      this.franchiseRole(form);
    } else if(value === 'isFranchise') {
      form = { ...this.props.userInfo, selectAdmin: false, isAdmin: false, isPilot: false, isMerchant: false, isFranchiseAdmin: false, isManager: false, isTeam: false,isFranchise: true, };
      this.franchiseRole(form);
    } else if(value === 'isTeam') {
        form = { ...this.props.userInfo, selectAdmin: false, isAdmin: false, isPilot: false, isMerchant: false, isFranchiseAdmin: false, isManager: false, isTeam: true,isFranchise: false, };
        this.franchiseRole(form);
    }
  }

  render() {
    const userList  = this.state.userList && this.state.userList.filter((list) => {
        if(session() && session().manager.isFranchiseAdmin) {
          return list.title !== 'Franchise';
        } else {
          return list
        }
      }).map((list) => <Option key={list.key}  text={list.title}>{list.title}</Option>)
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
        {/*<Option key={'isManager'}  text={'Manager'}>{'Manager'}</Option>*/}
        {/*<Option key={'isCustomer'}  text={'Customer'}>{'Customer'}</Option>*/}
        {/*<Option key={'isPilot'}  text={'Pilot'}>{'Pilot'}</Option>*/}
        {/*<Option key={'isFranchise'}  text={'Franchise'} disabled={(session.manager && session.manager.isFranchiseAdmin)}>{'Franchise'}</Option>*/}
        {/*<Option key={'isTeam'}  text={'Team'}>{'Team'}</Option>*/}
        {userList}
      </Select>
    );
  }
}
