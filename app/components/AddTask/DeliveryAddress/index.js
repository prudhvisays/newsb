import React from 'react';
import Input from '../Input';
import Flatpickr from 'react-flatpickr';
import '../../../../node_modules/flatpickr/dist/themes/dark.css';
import DMaps from '../DMaps';
import '../TaskAddress/taskAddress.css';
import moment from 'moment';

export default class TaskAddress extends React.Component { //eslint-disable-line
  constructor(props) {
    super(props);
    this.toName = this.toName.bind(this);
    this.toPhone = this.toPhone.bind(this);
    this.toEmail = this.toEmail.bind(this);
    this.toDate = this.toDate.bind(this);
    this.emitChanges = this.emitChanges.bind(this);
  }
  toName(e) {
    const { delivery } = this.props.stateAddTask;
    this.emitChanges({ ...delivery, to_name: e.target.value });
  }
  toPhone(e) {
    const { delivery } = this.props.stateAddTask;
    this.emitChanges({ ...delivery, to_phone: e.target.value });
  }
  toEmail(e) {
    const { delivery } = this.props.stateAddTask;
    this.emitChanges({ ...delivery, to_email: e.target.value });
  }
  toDate(date) {
    const { delivery } = this.props.stateAddTask;
    const Date = moment(date[0]).format();
    this.emitChanges({ ...delivery, to_date: Date });
  }
  emitChanges(newFormState) {
    this.props.deliveryChange(newFormState);
  }
  render() {
    const { deliveryCord, stateAddTask, deliveryChange } = this.props;
    return (
      <div className="ink-flex vertical task-address" style={{ padding: '0.8em 0.8em' }}>
        <Input Name={'Name'} Holder={'Enter Name'} onChange={this.toName} />
        <Input Name={'Phone'} Holder={'Enter Phone Number'} onChange={this.toPhone} />
        <Input Name={'Email'} Holder={'Enter Email'} onChange={this.toEmail} />
        <div className="ink-flex vertical">
          <div className="sub-title">Date</div>
          <div><Flatpickr data-enable-time placeholder={'Deliver Before'} onChange={this.toDate} /></div>
        </div>
        <div className="ink-flex vertical">
          <div className="sub-title">Address</div>
          <DMaps deliveryCord={deliveryCord} stateAddTask={stateAddTask} deliveryChange={deliveryChange} />
        </div>
      </div>
    );
  }
}
