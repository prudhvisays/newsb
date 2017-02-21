import React from 'react';
import { connect } from 'react-redux';
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
            <AuthStyle className="all-50">
              <LogoStyles className="ink-flex push-center">
                <img src={Logo} className="logo" alt="logo" />
              </LogoStyles>
              <AuthForm data={formState} onSubmit={this.props.login} stateError={error} />
            </AuthStyle>
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
    login: (username, password) => { dispatch(loginRequest({ username, password })); }
  };
}

function mapStateToProps(state) {
  const data = state.get('auth');
  return {
    data,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
