import 'rc-calendar/assets/index.css';
import React from 'react';
import Calendar from 'rc-calendar';
import DatePicker from 'rc-calendar/lib/Picker';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';
import 'rc-time-picker/assets/index.css';
import TimePickerPanel from 'rc-time-picker/lib/Panel';
import moment from 'moment';

const format = 'YYYY-MM-DD HH:mm';

function getFormat(time) {
    return time ? format : 'YYYY-MM-DD';
}
class DateTimePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showTime: true,
            showDateInput: true,
            disabled: false,
            value: this.props.defaultValue,
        }
        this.onChange = this.onChange.bind(this);
        this.disabledDate = this.disabledDate.bind(this);
    }
    onChange(value) {
        console.log('DatePicker change: ', (value));
        this.setState({
            value,
        });
    }
    disabledDate(current) {
    if (!current) {
        // allow empty select
        return false;
    }
    const date = moment();
    date.hour(0);
    date.minute(0);
    date.second(0);
    return current.isBefore(date);  // can not select days before today
}
    render() {
        const state = this.state;
        const calendar = (
            <Calendar
                style={{ zIndex: 9999 }}
                formatter='YYYY-MM-DD HH:mm'
                timePicker={<TimePickerPanel/>}
                defaultValue={this.props.defaultCalendarValue}
                showDateInput={state.showDateInput}
                disabledDate={this.disabledDate}
            />
        );
        return (
            <DatePicker
            animation="slide-up"
            calendar={calendar}
            value={state.value}
            onChange={this.onChange}
            >
                {
                    ({value}) => {
                        return (
                            <span tabIndex="0">
                                <input
                                placeholder="Deliver Before"
                                style={{ width: '100%' }}
                                readOnly
                                tabIndex="-1"
                                className="ant-calendar-picker-input ant-input"
                                value={value && value.format(getFormat(state.showTime)) || ''}
                                />
                            </span>
                        )
                    }
                }
            </DatePicker>
        )
    }
}

export default DateTimePicker;
