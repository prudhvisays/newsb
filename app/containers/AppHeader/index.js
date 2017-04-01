import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router';
import * as actions from './actions';
import { logout } from '../AuthPage/actions';
import * as selectors from './selectors';
import AppHeaderStyle from './AppHeaderStyle';

class AppHeader extends React.Component {
  render() {
    const { triggerCollapse, Logout } = this.props;
    return (
      <AppHeaderStyle>
        <div>
          <Link to="/"><i className="fa fa-tachometer" aria-hidden="true" /></Link>
          <a onClick={triggerCollapse}><i className="fa fa-paper-plane" aria-hidden="true" /></a>
          <Link to="/user"><i className="fa fa-user-plus" aria-hidden="true" /></Link>
          <a onClick={Logout}><i className="fa fa-power-off" aria-hidden="true" /></a>
        </div>
      </AppHeaderStyle>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  collapsed: selectors.collapsed(),
});

export function mapDispatchToProps(dispatch) {
  return {
    triggerCollapse: () => { dispatch(actions.triggerCollapse())},
    Logout: () => { dispatch(logout()); },
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
