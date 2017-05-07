import 'rc-calendar/assets/index.css';
import React from 'react';
import Calendar from 'rc-calendar';
import DatePicker from 'rc-calendar/lib/Picker';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import moment from 'moment';

const formatStr = 'YYYY-MM-DD';
const cn = location.search.indexOf('cn') !== -1;

const now = moment();
if (cn) {
  now.locale('zh-cn').utcOffset(8);
} else {
  now.locale('en-gb').utcOffset(0);
}

const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');


function newArray(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  const date = moment();
  date.hour(0);
  date.minute(0);
  date.second(0);
  return current.isBefore(date);  // can not select days before today
}

function format(v) {
  return v ? v.format(formatStr) : '';
}

function isValidRange(v) {
  return v && v[0] && v[1];
}

function onStandaloneChange(value) {
  console.log('onChange');
  console.log(value[0] && format(value[0]), value[1] && format(value[1]));
}

function onStandaloneSelect(value) {
  console.log('onSelect');
  console.log(format(value[0]), format(value[1]));
}
class DateRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
    }
    this.onChange = this.onChange.bind(this);
    this.disabledDate = this.disabledDate.bind(this);
  }
  onChange(value) {
    this.setState({
      value,
    });
    if(this.props.merchantBlock) {
      this.props.merchantDateRange(value);
      this.props.getTeamCustomers()
    } else {
      this.props.pilotDateRange(value);
    }
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
  value(value) {
    return isValidRange(value) && `${format(value[0])} ~ ${format(value[1])}` || ''
  }
  render() {
    const state = this.state;
    const { dateRangePilot, merchantBlock, dateRangeMerchant, Style } = this.props;
    const rangeValue = merchantBlock ? dateRangeMerchant : dateRangePilot;
    const calendar = (
      <RangeCalendar
        showWeekNumber={false}
        dateInputPlaceholder={['start', 'end']}
        defaultValue={[now, now.clone().add(1, 'months')]}
        locale={cn ? zhCN : enUS}
        showClear={true}
      />
    );
    return (
      <DatePicker
        value={rangeValue}
        onChange={this.onChange}
        animation="slide-up"
        calendar={calendar}
        style={{ zIndex: '99999999'}}
      >
        {
          ({ value }) => {
            return (<span>
                <input
                  placeholder="Select Date"
                  style={Style}
                  disabled={state.disabled}
                  readOnly
                  className="ant-calendar-picker-input ant-input"
                  value={this.value(value)}
                />
                </span>);
          }
        }
      </DatePicker>
    )
  }
}

export default DateRange;
