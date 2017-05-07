import React from 'react';
import TopGroup from '../TopGroup';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import moment from "moment";
import DateRange from '../DateRange';

var SelectedStartDate = moment('2017-05-05');
var SelectedEndDate = moment('2017-05-09');
export default class Score extends React.Component { //eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      startDate: SelectedStartDate,
      endDate:SelectedEndDate
    };
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {

    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }
  render() {
    const { franchiseMerchants, openAccordion, dateRangeMerchant, merchantDateRange, getTeamCustomers, getMerchantReports} = this.props;
    const { focusedInput, startDate, endDate } = this.state;
    const Style = {
      width: '100%',
      border: '1px solid #e0d94d',
      fontSize: '0.75rem',
      fontWeight: '600',
      padding: '0.3em',
      marginBottom: '1em',
    }
    return (
      <div className="ink-flex">
        <div className="all-100 team-block" style={{ padding: '0.5em 0.8em', width: '100%' }}>
          <div className="ink-flex">
            <div className="all-100">
              <div className="team-search">
                <input type="text" placeholder="Search Teams" />
              </div>
            </div>
          </div>
        </div>
        <div className="all-100">
          <div className="ink-flex push-center" style={{ padding: '0.8em 0.8em 0 0.8em'}}>
            <div className="">
              <DateRange
                merchantBlock={true}
                merchantDateRange={merchantDateRange}
                dateRangeMerchant={dateRangeMerchant}
                getTeamCustomers={getTeamCustomers}
                Style={Style}
              />
            </div>
          </div>
        </div>
        <div className="all-100">
          <div className="top-group-list" style={{ padding: '0.8em' }}>
            <TopGroup
              franchiseMerchants={franchiseMerchants}
              openAccordion={openAccordion}
              getMerchantReports={getMerchantReports}
            />
          </div>
        </div>
      </div>
    );
  }
}
