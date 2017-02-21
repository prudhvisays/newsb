import React from 'react';
import HeaderStyle from './HeaderStyle';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../../containers/AuthPage/actions';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { addTask } = this.props;
    return (
      <HeaderStyle className="icon-bar">
        <div>
          <Link to="/"><i className="fa fa-tachometer" aria-hidden="true"></i></Link>
          <a><i className="fa fa-map-o" aria-hidden="true"></i></a>
          <a onClick={addTask}><i className="fa fa-puzzle-piece" aria-hidden="true"></i></a>
          <a><i className="fa fa-users" aria-hidden="true"></i></a>
          <a><i className="fa fa-address-card" aria-hidden="true"></i></a>
          <a><i className="fa fa-credit-card" aria-hidden="true"></i></a>
          <a><i className="fa fa-toggle-on" aria-hidden="true"></i></a>
          <Link to="/franchise"><i className="fa fa-toggle-on" aria-hidden="true"></i></Link>
          <a onClick={this.props.Logout}><i className="fa fa-power-off" aria-hidden="true"></i></a>
        </div>
      </HeaderStyle>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    Logout: () => { dispatch(logout()); }
  };
}

export default connect(null, mapDispatchToProps)(Header);
