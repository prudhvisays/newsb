import React from 'react';
import AreaChart from '../Charts/AreaChart';
import { hourData } from './hourData';
import { weekData } from './weekData';

export default class Target extends React.Component { //eslint-disable-line
  render() {
    const { compressed } = this.props
    return (
      <div className="boxShadow block-background" style={{ height: '67vh' }}>
        <div className="ink-flex">
          <div className="all-100">
            <ul className="ink-flex time-length push-right">
              <li className=""><a className="time-length-btn">Week</a></li>
              <li className=""><a className="time-length-btn">Month</a></li>
              <li className=""><a className="time-length-btn">Year</a></li>
            </ul>
          </div>
          <div className="all-100">
            <div className="ink-flex" style={{ position: 'relative', padding: '0.8em', top: '-1em'}}>
                <div className="all-50" style={{ position: 'relative'}}>
                  <div className="ink-flex vertical" style={{ position: 'absolute', top: '2em' }}>

                  </div>
                </div>
              {!compressed && <div className="all-50">
                <div className="custom-chart">
                  <AreaChart data={hourData} color={'rgb(81, 212, 255)'} />
                </div>
              </div>}
            </div>
          </div>
          <div className="all-100">
            <div className="all-50" style={{ position: 'relative'}}>
              <div className="ink-flex vertical" style={{ position: 'absolute', top: '2em' }}>
              </div>
            </div>
            {!compressed && <div className="all-50">
              <div className="second-chart">
                <AreaChart data={weekData} color={'rgb(81, 212, 255)'} />
              </div>
            </div>}
          </div>
        </div>
      </div>
    );
  }
}
