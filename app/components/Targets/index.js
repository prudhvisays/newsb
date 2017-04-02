import React from 'react';
import DonutChart from '../Charts/Donut';
import FranchiseList from './FranchiseList';

export default class Target extends React.Component { //eslint-disable-line
  render() {
    const { stateOrderStats, getFranchiseList, franchiseList, selectFranchise } = this.props;
    return (
      <div className="all-35 marginTop" style={{ height: '30vh' }}>
        <div className="boxShadow block-background" style={{ height: '30vh' }}>
          <DonutChart stateOrderStats={stateOrderStats} />
          <FranchiseList
            getFranchiseList={getFranchiseList}
            franchiseList={franchiseList}
            selectFranchise={selectFranchise}
          />
        </div>
      </div>
    );
  }
}
