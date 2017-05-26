import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router';
import  { selectFranchise, getFranchiseList, initialiseData} from '../../HomePage/actions';
import { franchiseList } from '../../HomePage/selectors';
import FranchiseList from '../../../components/Targets/FranchiseList';
import { userRoleType } from '../../../Api/ApiConstants';

class SubHeader extends React.Component {
  render() {
    return (
      <div
        style={{ background: '#fff', height: '40px', padding: '0.3em 0.3em'}}
      >
        { userRoleType() === 'isAdmin' && location.pathname !== '/user' && <FranchiseList
          franchiseList={this.props.franchiseList}
          getFranchiseList={this.props.getFranchiseList}
          selectFranchise={this.props.selectFranchise}
          initialiseData={this.props.initialiseData}
        />}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  franchiseList: franchiseList(),
});

export function mapDispatchToProps(dispatch) {
  return {
    initialiseData: () => { dispatch(initialiseData());},
    selectFranchise: (data) => { dispatch(selectFranchise(data)); },
    getFranchiseList: () => { dispatch(getFranchiseList()); }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(SubHeader);
