import React from 'react';
import Select, { Option } from 'rc-select';
import 'rc-select/assets/index.css';

function onSelect() {
  console.log(arguments);
}

function onDeselect() {
  console.log(arguments);
}
export default class UserSelect extends React.Component { //eslint-disable-line
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
      this.props.getUserTeam();
  }
  onChange(value) {
   const { userInfo } = this.props;
   this.emitChanges({ ...userInfo, teams: value });
  }
  emitChanges(data) {
    this.props.onUserFormChange(data);
  }
  useAnim(e) {
    this.setState({
      useAnim: e.target.checked,
    });
  }
  render() {
    const { teams } = this.props.userInfo
    const dropdownMenuStyle = {
      maxHeight: 200,
      overflow: 'auto',
      borderRadius: 0,
      fontSize: '0.8rem',
    };
    const userTeams = this.props.userTeams && this.props.userTeams.map((team) => (
      <Option key={team._id} title={team.name}>{team.name} {console.log('hello')}</Option>
      ));
    return (
      <Select
        value={teams}
        animation={this.state.useAnim ? 'slide-up' : null}
        choiceTransitionName="rc-select-selection__choice-zoom"
        dropdownMenuStyle={dropdownMenuStyle}
        style={{ width: '100%' }}
        multiple
        optionFilterProp="text"
        optionLabelProp="children"
        onSelect={onSelect}
        onDeselect={onDeselect}
        placeholder="Select Teams"
        onChange={this.onChange}
        tokenSeparators={[' ', ',']}
      >
        {userTeams}
      </Select>
    );
  }
}

