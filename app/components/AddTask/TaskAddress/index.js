import React from 'react';
import Input from '../Input';
import Flatpickr from 'react-flatpickr';
import '../../../../node_modules/flatpickr/dist/themes/dark.css';
import GMaps from '../GMaps';
import './taskAddress.css';
import moment from 'moment';

export default class TaskAddress extends React.Component { //eslint-disable-line
  constructor(props) {
    super(props);
    this.nameChange = this.nameChange.bind(this);
    this.phoneChange = this.phoneChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.calendarChange = this.calendarChange.bind(this);
    this.emitChanges = this.emitChanges.bind(this);
  }
  nameChange(e) {
    const { pickup } = this.props.stateAddTask;
    this.emitChanges({ ...pickup, from_name: e.target.value });
  }
  phoneChange(e) {
    const { pickup } = this.props.stateAddTask;
    this.emitChanges({ ...pickup, from_phone: e.target.value });
  }
  emailChange(e) {
    const { pickup } = this.props.stateAddTask;
    this.emitChanges({ ...pickup, from_email: e.target.value });
  }
  calendarChange(date) {
    const { pickup } = this.props.stateAddTask;
    const Date = moment(date[0]).format();
    this.emitChanges({ ...pickup, from_date: Date });
  }
  emitChanges(newFormState) {
    this.props.pickupChange(newFormState);
  }
  render() {
    const { pickupCord, pickupChange, stateAddTask } = this.props;
    return (
      <div className="ink-flex vertical task-address" style={{ padding: '0.8em 0.8em' }}>
        <Input Name={'Name'} Holder={'Enter Name'} onChange={this.nameChange} />
        <Input Name={'Phone'} Holder={'Enter Phone Number'} onChange={this.phoneChange} />
        <Input Name={'Email'} Holder={'Enter Email'} onChange={this.emailChange} />
        <div className="ink-flex vertical">
          <div className="sub-title">Date</div>
          <div><Flatpickr data-enable-time placeholder={'Pickup Before'} onChange={this.calendarChange} /></div>
        </div>
        <div className="ink-flex vertical">
          <div className="sub-title">Address</div>
          <GMaps pickupCord={pickupCord} stateAddTask={stateAddTask} pickupChange={pickupChange} />
        </div>
      </div>
    );
  }
}
