import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SubHeader from './SubHeader';
import { Link } from 'react-router';
import * as actions from './actions';
import * as selectors from './selectors';
import AppHeaderStyle from './AppHeaderStyle';

class AppHeader extends React.Component {
  render() {
    const { triggerCollapse } = this.props;
    return (
      <div id="app-header">
        <AppHeaderStyle>
          <div className="container-fluid">
            <div className="nav justify-content-between">
              <div className="left-column">
                <div className="d-flex flex-row">
                  <div className="p-2" onClick={triggerCollapse}><i className="material-icons">menu</i></div>
                  <div className="p-2">DashBoard</div>
                  <div className="p-2">Activities</div>
                </div>
              </div>
              <div className="right-column">
                <div className="d-flex flex-row-reverse">
                  <div className="p-2">Profile</div>
                  <div className="p-2">Notifications</div>
                </div>
              </div>
            </div>
          </div>
        </AppHeaderStyle>
        <SubHeader />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  collapsed: selectors.collapsed(),
});

export function mapDispatchToProps(dispatch) {
  return {
    triggerCollapse: () => { dispatch(actions.triggerCollapse())}
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
