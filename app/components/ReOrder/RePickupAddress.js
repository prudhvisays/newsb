import React from 'react';
import Input from './ReInput';
import Flatpickr from 'react-flatpickr';
import PickupLocation from './PickupLocation';
import moment from 'moment';

export default class RePickupAddress extends React.Component { //eslint-disable-line
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.reFromDate = this.reFromDate.bind(this);
        this.emitChanges = this.emitChanges.bind(this);
    }
    onChange(e) {
        const { stateData } = this.props;
        this.emitChanges({ ...stateData, [e.target.name]: e.target.value });
    }
    reFromDate(date) {
        const { stateData } = this.props;
        const Date = moment(date[0]).utc().format();
        this.emitChanges({ ...stateData, from_date_time: Date });
    }
    emitChanges(newFormState) {
        this.props.reOrder(newFormState);
    }

    render() {
        const { reOrder, stateData } = this.props;
        return (
            <div className="ink-flex vertical task-address reorder-card">
                <Input title={'Name'} Name={'from_name'} Holder={'Enter Name'} onChange={this.onChange} value={stateData.from_name} />
                <Input title={'Phone Number'} Name={'from_phone'} Holder={'Enter Phone Number'} onChange={this.onChange} value={stateData.from_phone} />
                <Input title={'Email Id'} Name={'from_email'} Holder={'Enter Email'} onChange={this.onChange} value={stateData.from_email} />
                <div className="ink-flex vertical">
                    <div className="sub-title">Pickup Before</div>
                    {/*<div><Flatpickr*/}
                        {/*placeholder={'Pickup Date'}*/}
                        {/*onChange={this.reFromDate}*/}
                        {/*options={{minDate: 'today',enableTime: true}}*/}
                    {/*/></div>*/}
                </div>
                <div className="ink-flex vertical">
                    <div className="sub-title">Address</div>
                    <PickupLocation stateData={stateData} reOrder={reOrder} />
                </div>
            </div>
        );
    }
}
