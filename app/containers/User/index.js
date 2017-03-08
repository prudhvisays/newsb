import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Map from '../../components/AddUser/Map';
import UserForm from '../../components/AddUser';
import * as actions from './actions';
import * as selectors from './selectors';

class User extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.getUserTeam();
  }
  render() {
    console.log(this.props.userTeams);
    return (
      <section style={{ background: '#eee', color: '#fff' }}>
        <div className="ink-grid" style={{ padding: 0, margin: '0 0 0 3.5em' }}>
          <div className="column-group quarter-horizontal-gutters">
            <div className="all-50">
              <UserForm
                stateUserTeams={this.props.userTeams}
                stateUserInfo={this.props.userInfo}
                onUserFormChange={this.props.onUserFormChange}
                userCordsChange={this.props.userCordsChange}
                createUser={this.props.createUser}
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
  userTeams: selectors.userTeams(),
  userInfo: selectors.userInfo(),
});

function mapDispatchToProps(dispatch) {
  return {
    getUserTeam: () => { dispatch(actions.getUserTeam()); },
    onUserFormChange: (data) => { dispatch(actions.onUserFormChange(data)); },
    userCordsChange: (data) => { dispatch(actions.userCordsChange(data)); },
    userGeoFence: (data) => { dispatch(actions.userGeoFence(data)); },
    createUser: () => { dispatch(actions.createUser()); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
