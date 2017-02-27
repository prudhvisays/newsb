import React from 'react';
import moment from 'moment';
import AddressBlock from './AddressBlock';
import Timeline from './Timeline';
import TabStyle from './TabStyle';
import './tabStyle.css';

export default class Tabs extends React.Component { //eslint-disable-line
  constructor() {
    super();
    this.customTabs = this.customTabs.bind(this);
    this.formatTime = this.formatTime.bind(this);
  }
  componentDidMount() {
    document.getElementById('defaultOpen').click();
  }
  customTabs(event, cityName) {
    const evt = event;
    let i;
    // Get all elements with class="tabcontent" and hide them
    const tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i += 1) {
      tabcontent[i].style.display = 'none';
    }

    // Get all elements with class="tablinks" and remove the class "active"
    const tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i += 1) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = 'block';
    evt.currentTarget.className += ' active';
  }
  formatTime(time) {
    return  moment(time).locale('en').format('YYYY-MM-DD HH:mm');
  }
  render() {
    const { closeOrderDetails, stateOrderInfo, stateOrderStatus } = this.props
    return (
      <div className="line-boxShadow block-background" style={{ height: '67vh', position: 'relative' }}>
        <TabStyle className="tab ink-flex" style={{ margin: 0 }}>
          <li><a className="tablinks" id="defaultOpen" onClick={(event) => { this.customTabs(event, 'London'); }}>Task Details</a></li>
          <li><a className="tablinks" onClick={(event) => { this.customTabs(event, 'Paris'); }}>Activity Timeline</a></li>
          <li><a className="tablinks" onClick={(event) => { this.customTabs(event, 'Tokyo'); }}>Path History</a></li>
          <li><a className="tablinks" onClick={closeOrderDetails}><i className="fa fa-times-circle" aria-hidden="true"></i></a></li>
        </TabStyle>
        <div id="London" className="tabcontent" style={{ fontSize: '0.7rem' }}>
            <div className="tab-scroll">
              <div className="ink-flex second-boxShadow tab-first-row">
                <div className="all-50">
                  <div className="fw-700 sub-title">TaskId</div>
                  <div>{stateOrderInfo._id}</div>
                </div>
                <div className="all-50">
                  <div className="fw-700 sub-title">Progress</div>
                  <div><span style={{ color: 'green' }}>{stateOrderInfo.status}</span></div>
                </div>
              </div>
              <div className="ink-flex second-boxShadow tab-second-row">
                <div className="all-50">
                  <div className="tab-block ink-flex vertical">
                    <div className="fw-700 sub-title">Team</div>
                    <div>{stateOrderInfo.team}</div>
                  </div>
                </div>
                <div className="all-50">
                  <div className="tab-block ink-flex vertical">
                    <div className="fw-700 sub-title">Pilot</div>
                    <div>{stateOrderInfo.pilot}</div>
                  </div>
                </div>
              </div>
              <div className="ink-flex second-boxShadow tab-second-row">
                <div className="all-50">
                  <div className="tab-block ink-flex vertical">
                    <div className="fw-700 sub-title">Start Time</div>
                    <div>{this.formatTime(stateOrderInfo.pilot_start_date_time)}</div>
                  </div>
                </div>
                <div className="all-50">
                  <div className="tab-block ink-flex vertical">
                    <div className="fw-700 sub-title">End Time</div>
                    <div>{this.formatTime(stateOrderInfo.pilot_to_date_time)}</div>
                  </div>
                </div>
              </div>
              <AddressBlock Title={'Pickup'}
                            name={stateOrderInfo.from_name}
                            phone={stateOrderInfo.from_phone}
                            email={stateOrderInfo.from_email}
                            address={stateOrderInfo.from_address}
              />
              <AddressBlock Title={'Delivery'}
                            name={stateOrderInfo.to_name}
                            phone={stateOrderInfo.to_phone}
                            email={stateOrderInfo.to_email}
                            address={stateOrderInfo.to_address}
              />
            </div>
          </div>
          <div id="Paris" className="tabcontent">
          <Timeline timeLine={stateOrderInfo.timeline} />
          </div>
          <div id="Tokyo" className="tabcontent">
          </div>
      </div>
    );
  }
}
