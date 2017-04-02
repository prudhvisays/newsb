import React from 'react';
import DonutChart from '../Charts/Donut';
import FranchiseList from './FranchiseList';
import { userRoleType } from '../../Api/ApiConstants';

export default class Target extends React.Component { //eslint-disable-line
  render() {
    const {
      stateOrderStats,
      getFranchiseList,
      franchiseList,
      selectFranchise,
      getInfo,
    } = this.props;
    return (
      <div className="all-35 marginTop" style={{ height: '30vh' }}>
        <div className="boxShadow block-background" style={{ height: '30vh' }}>
          <DonutChart stateOrderStats={stateOrderStats} />
          { userRoleType() === 'isAdmin' && <FranchiseList
            getFranchiseList={getFranchiseList}
            franchiseList={franchiseList}
            selectFranchise={selectFranchise}
            getInfo={getInfo}
          />}
        </div>
      </div>
    );
  }
}
