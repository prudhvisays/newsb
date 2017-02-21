import React from 'react';
import { connect } from 'react-redux';
import FranchiseMap from '../../components/FranchiseForm/Map';
import FranchiseForm from '../../components/FranchiseForm';
import * as actions from './actions';

class Franchise extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getPilots();
  }
  render() {
    return (
      <section style={{ background: '#1f253d', color: '#fff' }}>
        <div className="ink-grid" style={{ padding: 0, margin: '0 0 0 3.5em' }}>
          <div className="column-group quarter-horizontal-gutters">
            <div className="all-50">
              <FranchiseForm
                postFrancCord={this.props.postFrancCord}
                stateFranchiseGeoFence= {this.props.franchiseGeoFence}
                StateReqGeoFence={this.props.reqGeoFence}
                newFormState={this.props.newFormState}
                onFormChange={this.props.onFormChange}
                submitFranchiseData={this.props.submitFranchiseData}
                statefranchiseCord={this.props.franchiseCord}
              />
            </div>
            <div className="all-50">
              <FranchiseMap
                statefranchiseCord={this.props.franchiseCord}
                postGeoFence={this.props.postGeoFence}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  const { franchiseCord, franchiseGeoFence, reqGeoFence, newFormState } = state.get('franchise');
  return {
    franchiseCord,
    franchiseGeoFence,
    reqGeoFence,
    newFormState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    postFrancCord: (data) => { dispatch(actions.postFrancCord(data)); },
    postGeoFence: (data) => { dispatch(actions.postGeoFence(data)); },
    onFormChange: (data) => { dispatch(actions.onFormChange(data)); },
    getPilots: (data) => { dispatch(actions.getPilots(data)); },
    submitFranchiseData: (data) => { dispatch(actions.submitFranchiseData(data)); },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Franchise);
