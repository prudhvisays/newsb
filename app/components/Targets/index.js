import React from 'react';
import DonutChart from '../Charts/Donut';

export default class Target extends React.Component { //eslint-disable-line
  render() {
    const { stateOrderStats } = this.props;
    return (
      <div className="all-35 marginTop" style={{ height: '30vh' }}>
        <div className="boxShadow block-background" style={{ height: '30vh' }}>
          <DonutChart stateOrderStats={stateOrderStats} />
        </div>
      </div>
    );
  }
}
