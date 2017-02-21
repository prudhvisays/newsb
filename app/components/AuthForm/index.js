import React from 'react';
import { changeForm } from '../../containers/AuthPage/actions';
import { connect } from 'react-redux';
import ErrorStyle from './ErrorStyle';

class AuthForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.emitChange = this.emitChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  changeUsername(e) {
    this.emitChange({ ...this.props.data, username: e.target.value });
  }
  changePassword(e) {
    this.emitChange({ ...this.props.data, password: e.target.value });
  }
  emitChange(newFormState) {
    this.props.onChangeForm(newFormState);
  }
  onSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.props.data.username, this.props.data.password);
  }
  render() {
    return (
      <div className="ink-flex push-center form-style">
        { this.props.stateError && <ErrorStyle>{this.props.stateError.message}</ErrorStyle>}
        <div className="all-70">
          <form onSubmit={this.onSubmit}>
            <div className="ink-flex push-middle vertical">
              <div className="input-div"><input type="text" placeholder="Username" onChange={this.changeUsername}></input></div>
              <div className="input-div"><input type="password" placeholder="Password" onChange={this.changePassword}></input></div>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeForm: (newFormState) => { dispatch(changeForm(newFormState)); },
  };
}
export default connect(null, mapDispatchToProps)(AuthForm);
