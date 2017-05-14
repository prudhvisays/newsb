import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Map from '../../components/AddUser/Map';
import UserForm from '../../components/AddUser';
import * as actions from './actions';
import * as selectors from './selectors';
import { session } from '../../Api/ApiConstants';
import moment from 'moment';

class User extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    // const names = moment().tz.names()
    // this.props.getTimeZones(names)
  }
  render() {
    return (
      <section style={{ background: '#eee', color: '#fff' }}>
        <div className="ink-grid" style={{ padding: 0, margin: '0 0 0 3.5em' }}>
          <div className="column-group quarter-horizontal-gutters">
            <div className="all-50">
              { this.props.userData.createUserResponse && <div className="ink-flex push-center" style={{ position: 'relative', top: '2rem', left: '0em', color: '#d9534f' }}>{this.props.userData.createUserResponse.error}</div>}
              <UserForm
                stateUserTeams={this.props.userTeams}
                stateUserInfo={this.props.userInfo}
                onUserFormChange={this.props.onUserFormChange}
                userCordsChange={this.props.userCordsChange}
                createUser={this.props.createUser}
                stateUserRequest={this.props.userRequest}
                stateUserStatus={this.props.userStatus}
                getUserTeam={this.props.getUserTeam}
                getFranchise={this.props.getFranchise}
                stateFranchiseList={this.props.franchisesList}
                getTimeZones={this.props.getTimeZones}
              />
            </div>
            <div className="all-50">
              <Map
                stateUserInfo={this.props.userInfo}
                onUserFormChange={this.props.onUserFormChange}
                userGeoFence={this.props.userGeoFence}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  userData: selectors.userData(),
  userTeams: selectors.userTeams(),
  franchisesList: selectors.franchisesList(),
  userInfo: selectors.userInfo(),
  userRequest: selectors.userRequest(),
  userStatus: selectors.userStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    getUserTeam: () => { dispatch(actions.getUserTeam()); },
    getFranchise: () => { dispatch(actions.getFranchise()); },
    onUserFormChange: (data) => { dispatch(actions.onUserFormChange(data)); },
    userCordsChange: (data) => { dispatch(actions.userCordsChange(data)); },
    userGeoFence: (data) => { dispatch(actions.userGeoFence(data)); },
    createUser: () => { dispatch(actions.createUser()); },
    clearUserForm: () => { dispatch(actions.clearUserForm()); },
    getTimeZones: (data) => { dispatch(actions.getTimeZones(data)); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
