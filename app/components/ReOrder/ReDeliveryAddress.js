import React from 'react';
import Input from './ReInput';
import DeliveryLocation from './DeliveryLocation';
import DateTimePicker from './DateTimePicker';
import moment from 'moment';

export default class ReDeliveryAddress extends React.Component { //eslint-disable-line
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.reToDate = this.reToDate.bind(this);
        this.emitChanges = this.emitChanges.bind(this);
    }
    onChange(e) {
        const { stateData } = this.props;
        this.emitChanges({ ...stateData, [e.target.name]: e.target.value });
    }
    reToDate(date) {
        const { stateData } = this.props;
        const Date = moment(date[0]).utc().format();
        this.emitChanges({ ...stateData, to_date_time: Date });
    }
    emitChanges(newFormState) {
        this.props.reOrder(newFormState);
    }

    render() {
        const { reOrder, stateData } = this.props;
        return (
            <div className="ink-flex vertical task-address reorder-card">
                <Input title={'Name'} Name={'to_name'} Holder={'Enter Name'} onChange={this.onChange} value={stateData.to_name} />
                <Input title={'Phone Number'} Name={'to_phone'} Holder={'Enter Phone Number'} onChange={this.onChange} value={stateData.to_phone} />
                <Input title={'Email Id'} Name={'to_email'} Holder={'Enter Email'} onChange={this.onChange} value={stateData.to_email} />
                <div className="ink-flex vertical">
                    <div className="sub-title">Deliver Before</div>
                    {/*<div><Flatpickr*/}
                        {/*placeholder={'Deliver Date'}*/}
                        {/*onChange={this.reToDate}*/}
                        {/*options={{minDate: 'today',enableTime: true}}*/}
                    {/*/></div>*/}
                    <div>
                        <DateTimePicker defaultCalendarValue={moment()}/>
                    </div>
                </div>
                <div className="ink-flex vertical">
                    <div className="sub-title">Address</div>
                    <DeliveryLocation stateData={stateData} reOrder={reOrder} />
                </div>
            </div>
        );
    }
}
