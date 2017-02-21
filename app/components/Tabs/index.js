import React from 'react';
import AddressBlock from './AddressBlock';
import Timeline from './Timeline';
import TabStyle from './TabStyle';
import './tabStyle.css';

export default class Tabs extends React.Component { //eslint-disable-line
  constructor() {
    super();
    this.customTabs = this.customTabs.bind(this);
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
  render() {
    return (
      <div className="line-boxShadow block-background" style={{ height: '67vh' }}>
        <TabStyle className="tab ink-flex" style={{ margin: 0 }}>
          <li><a className="tablinks" id="defaultOpen" onClick={(event) => { this.customTabs(event, 'London'); }}>Task Details</a></li>
          <li><a className="tablinks" onClick={(event) => { this.customTabs(event, 'Paris'); }}>Activity Timeline</a></li>
          <li><a className="tablinks" onClick={(event) => { this.customTabs(event, 'Tokyo'); }}>Path History</a></li>
        </TabStyle>
        <div id="London" className="tabcontent" style={{ fontSize: '0.7rem' }}>
          <div className="tab-scroll">
            <div className="ink-flex second-boxShadow tab-first-row">
              <div className="all-50">
                <div className="fw-700 sub-title">TaskId</div>
                <div>#277ID8</div>
              </div>
              <div className="all-50">
                <div className="fw-700 sub-title">Progress</div>
                <div><span style={{ color: 'green' }}>Started</span></div>
              </div>
            </div>
            <div className="ink-flex second-boxShadow tab-second-row">
              <div className="all-50">
                <div className="tab-block ink-flex vertical">
                  <div className="fw-700 sub-title">Team</div>
                  <div>Madhapur</div>
                </div>
              </div>
              <div className="all-50">
                <div className="tab-block ink-flex vertical">
                  <div className="fw-700 sub-title">Pilot</div>
                  <div>Mark Tyson</div>
                </div>
              </div>
            </div>
            <div className="ink-flex second-boxShadow tab-second-row">
              <div className="all-50">
                <div className="tab-block ink-flex vertical">
                  <div className="fw-700 sub-title">Start Time</div>
                  <div>7:30pm 12/13/1994</div>
                </div>
              </div>
              <div className="all-50">
                <div className="tab-block ink-flex vertical">
                  <div className="fw-700 sub-title">End Time</div>
                  <div>7:30pm 12/13/1994</div>
                </div>
              </div>
            </div>
            <AddressBlock Title={'Pickup'} />
            <AddressBlock Title={'Delivery'} />
          </div>
        </div>
        <div id="Paris" className="tabcontent">
          <Timeline />
        </div>
        <div id="Tokyo" className="tabcontent">
        </div>
      </div>
    );
  }
}
