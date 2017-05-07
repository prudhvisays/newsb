import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import ToggleStyle from './ToggleStyle';
import moment from "moment";
import DateRange from '../DateRange';

var SelectedStartDate = moment('2017-05-05');
var SelectedEndDate = moment('2017-05-09');

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      startDate: SelectedStartDate,
      endDate:SelectedEndDate
    };
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.closeAction = this.closeAction.bind(this);
  }

  onDatesChange({ startDate, endDate }) {

    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  closeAction() {
    this.props.getDetailsColToggle();
    this.props.pilotDateRange([]);
  }
  render(){
    const { isAvailable, detailsColToggle, dateRangePilot} = this.props;
    const { getDetailsColToggle, getPilotReports, pilotDateRange} = this.props;
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
      <ToggleStyle className="switch">
        { !detailsColToggle ? (<div><div className="active">{isAvailable ? 'Force Logout' : 'Active'}</div>
          <div className="get-details" onClick={getDetailsColToggle}>Get Details</div></div>) : (
          <div className="row">
            <div className="all-100">
              <DateRange pilotDateRange={pilotDateRange} dateRangePilot={dateRangePilot} Style={Style} />
            </div>
            <div className="all-100 ink-flex">
              <div className="ink-flex">
                <div className="all-50">
                  <div className="close" onClick={this.closeAction}>Close</div>
                </div>
                <div className="all-50">
                  <div className="download" onClick={getPilotReports}>
                    <span>Download</span>
                  </div>
                </div>
              </div>
            </div>
          </div>)}
      </ToggleStyle>
    )
  }
}

export default ToggleButton;
