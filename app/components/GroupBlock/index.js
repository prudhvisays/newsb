import React from 'react';
import TopGroup from '../TopGroup';

export default class Score extends React.Component { //eslint-disable-line
  render() {
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
          <ul className="ink-flex time-length push-center">
            <li className=""><a className="time-length-btn">Day</a></li>
            <li className=""><a className="time-length-btn">Week</a></li>
            <li className=""><a className="time-length-btn">Month</a></li>
          </ul>
        </div>
        <div className="all-100">
          <div className="top-group-list" style={{ padding: '0.8em' }}>
            <TopGroup />
          </div>
        </div>
      </div>
    );
  }
}
