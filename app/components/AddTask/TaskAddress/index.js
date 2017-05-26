import React from 'react';
import Input from '../Input';
import Flatpickr from 'react-flatpickr';
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
    this.onOpen = this.onOpen.bind(this);
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
    if(date.length > 0) {
      const { pickup } = this.props.stateAddTask;
      const Date = moment(date[0]).utc().format();
      this.emitChanges({ ...pickup, from_date: Date });
    }
  }
  emitChanges(newFormState) {
    this.props.pickupChange(newFormState);
  }
  onOpen(e) {
    e.preventDefault();
    const { pickup } = this.props.stateAddTask;
    const Date = moment().add(15,'m').utc().format();
    this.emitChanges({ ...pickup, from_date: Date });
  }
  render() {
    const { pickupCord, pickupChange, stateAddTask } = this.props;
    return (
      <div className="ink-flex vertical task-address" style={{ padding: '0.8em 0.8em' }}>
        <Input Name={'Name'} Holder={'Enter Name'}
               maxLength={32}
               onChange={this.nameChange} value={stateAddTask.pickup.from_name} />
        <Input Name={'Phone'} Holder={'Enter Phone Number'}
               required maxLength={10}
               onChange={this.phoneChange} value={stateAddTask.pickup.from_phone} />
        <Input Name={'Email'} Holder={'Enter Email'} onChange={this.emailChange} value={stateAddTask.pickup.from_email} />
        <div className="ink-flex vertical">
          <div className="sub-title">Pickup Before</div>
          <div><Flatpickr
            data-enable-time
            placeholder={'Pickup Before'}
            onChange={this.calendarChange}
            onBlur={this.onOpen}
            options={{minDate: 'today'}}
            value={ stateAddTask.pickup.from_date ? moment(stateAddTask.pickup.from_date).format() : ''}
          /></div>
        </div>
        <div className="ink-flex vertical">
           <div className="sub-title">Communication Address</div>
          <GMaps pickupCord={pickupCord} stateAddTask={stateAddTask} pickupChange={pickupChange} />
        </div>
      </div>
    );
  }
}
