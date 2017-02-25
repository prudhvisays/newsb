import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import './AddStyle.css';

export default class AddTask extends React.Component { //eslint-disable-line
  constructor(props) {
    super(props);
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.confirmPasswordChange = this.confirmPasswordChange.bind(this);
    this.firstNameChange = this.firstNameChange.bind(this);
    this.lastNameChange = this.lastNameChange.bind(this);
    this.mobileNumberChange = this.mobileNumberChange.bind(this);
    this.emailAddressChange = this.emailAddressChange.bind(this);
    this.licenseChange = this.licenseChange.bind(this);
    this.nameChange = this.nameChange.bind(this);

    this.emitChange = this.emitChange.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.setSelection = this.setSelection.bind(this);
  }
  usernameChange(e) {
    const { userInfo } = this.props.user;
    this.emitChange({ ...userInfo, username : e.target.value });
  }
  passwordChange(e) {
    const { userInfo } = this.props.user;
    this.emitChange({ ...userInfo, password : e.target.value });
  }
  confirmPasswordChange(e) {
    const { userInfo } = this.props.user;
    this.emitChange({ ...userInfo, confirmPassword : e.target.value });
  }
  firstNameChange(e) {
    const { userInfo } = this.props.user;
    this.emitChange({ ...userInfo, firstName : e.target.value });
  }
  lastNameChange(e) {
    const { userInfo } = this.props.user;
    this.emitChange({ ...userInfo, lastName : e.target.value });
  }
  mobileNumberChange(e) {
    const { userInfo } = this.props.user;
    this.emitChange({ ...userInfo, mobileNumber : e.target.value });
  }
  emailAddressChange(e) {
    const { userInfo } = this.props.user;
    this.emitChange({ ...userInfo, emailAddress : e.target.value });
  }
  licenseChange(e) {
    const { userInfo } = this.props.user;
    this.emitChange({ ...userInfo, license : e.target.value });
  }
  nameChange(e) {
    const { userInfo } = this.props.user;
    this.emitChange({ ...userInfo, name : e.target.value });
  }
  emitChange(userInfo) {
    this.props.userInfo(userInfo);
  }
  submitUser(e) {
    e.preventDefault();
    const { userInfo } = this.props.userInfo;
    this.props.postAddTask({ stateAddTask, pCord, dCord });
  }
  clearForm(e) {
    e.preventDefault();
    this.props.clearForm();
  }
  setSelection(e) {
    this.props.setSelection(e.target.value);
  }
  render() {
    const {
      userInfo
    } = this.props.user;
    return (
      <div className="boxShadow block-background" style={{ height: '67vh', position: 'relative' }}>
        {!stateAddTask.request ? (<form onSubmit={this.submitOrder}>
            <div className="ink-flex">
              <div className="all-100 team-block">
                <div className="ink-flex">
                  <div className="all-30" style={{ padding: '0.5em 0.8em' }}>
                    <div>Add Task</div>
                  </div>
                  <div className="all-70" style={{ padding: '0.3em 0.5em' }}>
                    <div className="ink-flex push-right">
                      <ButtonStyle cancel onClick={this.clearForm}>Clear</ButtonStyle>
                      <ButtonStyle type="submit">Save</ButtonStyle>
                    </div>
                  </div>
                </div>
              </div>
              <div className="all-40">
                <div className="ink-flex vertical">
                  <div className="title-desc ink-flex vertical">
                    <input type="text" placeholder="Enter Title" style={{ height: '5.9vh' }} value={stateAddTask.taskInfo.title} onChange={this.titleChange}></input>
                    <textarea
                      type="text"
                      placeholder="Enter Description"
                      style={{ height: '14.5vh', width: '100%', color: '#fff', fontSize: '0.8rem' }}
                      onChange={this.desChange}
                      value={stateAddTask.taskInfo.description}
                    />
                  </div>
                  <TaskMap pCord={pCord} dCord={dCord} />
                </div>
              </div>
              <div className="all-60" style={{ height: '40vh' }}>
                <div className="ink-flex">
                  <div className="all-100">
                    <TaskTab
                      pickupCord={pickupCord}
                      deliveryCord={deliveryCord}
                      pickupChange={pickupChange}
                      stateAddTask={stateAddTask}
                      deliveryChange={deliveryChange}
                    />
                  </div>
                  <div className="all-100">
                    <div className="ink-flex" style={{ marginLeft: '1em' }}>
                      <div className="control unstyled ink-flex" style={{ marginBottom: '0.8em' }} >
                        <div style={{ marginRight: '1em' }}><input type="radio" id="rb1" name="rb" value="auto" checked={stateAuto == 'auto'} onChange={this.setSelection}/><label htmlFor="rb1" style={{ marginLeft: '0.3em', color: '#9099b7' }}>Auto</label></div>
                        <div><input type="radio" id="rb2" name="rb" value="manual" checked={stateAuto == 'manual'} onChange={this.setSelection}/><label htmlFor="rb2" style={{ marginLeft: '0.3em', color: '#9099b7' }}>Manual</label></div>
                      </div>
                    </div>
                    <div className="ink-flex vertical">
                      <div style={{ margin: '0 0.3em' }}><TeamSelect /></div>
                      { !(stateAuto === 'auto') && <div style={{ margin: '0.2em 0.3em' }}><Select /></div> }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>) : (<LoadingSpinner className="ink-flex push-center cs-loader" color={stateAddTask.addTaskStatus.statusColor}>
            <div className="cs-loader-inner">
              <label>	●</label>
              <label>	●</label>
              <label>	●</label>
              <label>	●</label>
              <label>	●</label>
              <label>	●</label>
              <div className="cs-note">
                <span>{stateAddTask.addTaskStatus.statusText}</span></div>
            </div>
          </LoadingSpinner>)}
      </div>
    );
  }
}
