import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import AuthStyle from './AuthStyle';
import BackgrndStyle from './BackgrndStyle';
import AuthForm from '../../components/AuthForm';
import CurveStyle from './CurveStyle';
import LogoStyles from './LogoStyles';
import LoadingStyle from './LoadingStyle';
import { loginRequest } from './actions';
import Logo from './logo.png';
import Loading from './loading.gif';

class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { formState, currentlySending, error } = this.props.data;
    return (
      <BackgrndStyle>
        <CurveStyle>
          { !currentlySending ? <div className="ink-flex push-center">
            <div className="all-50">
              <AuthStyle>
              <LogoStyles className="ink-flex push-center">
                <img src={Logo} className="logo" alt="logo" />
              </LogoStyles>
              <AuthForm data={formState} onSubmit={this.props.login} stateError={error} userRole={'MANAGER'} />
            </AuthStyle>
              <div style={{ textAlign: 'center', color: '#6bc9c5', fontSize: '0.7em'}}>
                <Link to="/privacy-policy" style={{color: '#6bc9c5'}}><i className="fa fa-link" aria-hidden="true"></i>&nbsp;Privacy Policy</Link>
                <div>Made with <i className="fa fa-heart" aria-hidden="true" style={{ color: 'hsl(3, 81.8%, 49.6%)'}}></i> by Season Boy</div>
              </div>
            </div>
          </div> : <LoadingStyle className="ink-flex push-center">
            <img src={Loading} alt="loading" />
          </LoadingStyle>}
        </CurveStyle>
      </BackgrndStyle>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (username, password, userRole) => { dispatch(loginRequest({ username, password, userRole })); }
  };
}

function mapStateToProps(state) {
  const data = state.get('auth');
  return {
    data,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
