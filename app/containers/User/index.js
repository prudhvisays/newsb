import React from 'react';
import { connect } from 'react-redux';
import FranchiseMap from '../../components/FranchiseForm/Map';
import FranchiseForm from '../../components/FranchiseForm';
import * as actions from './actions';

class User extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
  }
  render() {
    return (
      <section style={{ background: '#1f253d', color: '#fff' }}>
        <div className="ink-grid" style={{ padding: 0, margin: '0 0 0 3.5em' }}>
          <div className="column-group quarter-horizontal-gutters">
            <div className="all-50">
              <AddUser
                newFormState={this.props.newFormState}
                onFormChange={this.props.onFormChange}
                submitAddUser={this.props.submitAddUser}
                cancelAddUser={this.props.cancelAddUser}
              />
            </div>
            <div className="all-50">
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  const { userInfo } = state.get('user');
  return {
    userInfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFormChange: (data) => { dispatch(actions.onFormChange(data)); },
    getPilots: (data) => { dispatch(actions.getPilots(data)); },
    submitFranchiseData: (data) => { dispatch(actions.submitFranchiseData(data)); },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(User);
