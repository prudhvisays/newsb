import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router';
import Actions from '../actions';
import  { selectFranchise, getFranchiseList, initialiseData} from '../../HomePage/actions';
import { franchiseList } from '../../HomePage/selectors';
import FranchiseList from '../../../components/Targets/FranchiseList';
import { userRoleType } from '../../../Api/ApiConstants';
import DateRange from '../../../components/DateRange';

class SubHeader extends React.Component {
  render() {
    return (
      <div
        style={{ background: '#333', height: '45px', padding: '0.4em 0.4em'}}
      >
        { userRoleType() === 'isAdmin' && location.pathname !== '/user' && <FranchiseList
          franchiseList={this.props.franchiseList}
          getFranchiseList={this.props.getFranchiseList}
          selectFranchise={this.props.selectFranchise}
          initialiseData={this.props.initialiseData}
        />}
        {/*<DateRange*/}
         {/**/}
        {/*/>*/}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  franchiseList: franchiseList(),
});

export function mapDispatchToProps(dispatch) {
  return {
    selectDateRange: () => { dispatch(Actions.selectDateRange()); },
    initialiseData: () => { dispatch(initialiseData()); },
    selectFranchise: (data) => { dispatch(selectFranchise(data)); },
    getFranchiseList: () => { dispatch(getFranchiseList()); }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(SubHeader);
