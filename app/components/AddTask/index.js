import React from 'react';
import LoadingSpinner from '../LoadingSpinner';
import './AddStyle.css';
import ButtonStyle from './ButtonStyle';
import TaskTab from './TaskTab';
import TaskMap from './TaskMap';
import Select from './Select';
import TeamSelect from './TeamSelect';

export default class AddTask extends React.Component { //eslint-disable-line
constructor(props) {
  super(props);
  this.titleChange = this.titleChange.bind(this);
  this.desChange = this.desChange.bind(this);
  this.emitChange = this.emitChange.bind(this);
  this.submitOrder = this.submitOrder.bind(this);
  this.clearForm = this.clearForm.bind(this);
  this.setSelection = this.setSelection.bind(this);
}
titleChange(e) {
  const { addTaskInfo } = this.props.stateAddTask;
  this.emitChange({ ...addTaskInfo, title: e.target.value });
}
desChange(e) {
  const { taskInfo } = this.props.stateAddTask;
  this.emitChange({ ...taskInfo, description: e.target.value });
}
emitChange(newFormState) {
  this.props.addTaskInfo(newFormState);
}
submitOrder(e) {
  e.preventDefault();
  const { stateAddTask, pCord, dCord } = this.props;
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
     pickupCord,
     deliveryCord,
     pCord,
     dCord,
     pickupChange,
     stateAddTask,
     deliveryChange,
     stateAuto,
     stateTeamList,
     teamSelect,
     stateSelectedPilots,
     stateOptedPilot,
     pilotSelect,
     isAdmin,
    } = this.props;
    const addtaskStyle = {
      height: isAdmin() ? '67vh' : '98vh',
      position: 'relative',
    }
    return (
      <div className="boxShadow block-background" style={addtaskStyle}>
        {!stateAddTask.request ? (<form onSubmit={this.submitOrder}>
          <div className="ink-flex">
            <div className="all-100 team-block">
              <div className="ink-flex">
                <div className="all-30" style={{ padding: '0.5em 0.8em' }}>
                  <div style={{ color: '#fff', fontWeight:'700' }}>Add Task</div>
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
                  { isAdmin() && (<input type="text" placeholder="Enter Title" style={{ height: '5.9vh' }} value={stateAddTask.taskInfo.title} onChange={this.titleChange}></input>)}
                  { isAdmin() && (<textarea
                    type="text"
                    placeholder="Enter Description"
                    style={{ height: '14.5vh', width: '100%', fontSize: '0.8rem' }}
                    onChange={this.desChange}
                    value={stateAddTask.taskInfo.description}
                  />)}
                </div>
                <TaskMap pCord={pCord} dCord={dCord} isAdmin={isAdmin}/>
              </div>
            </div>
            <div className="all-60" style={{ height: '40vh' }}>
              <div className="ink-flex">
                <div className="all-100">
                  { !isAdmin() && (<input type="text" placeholder="Enter Title" style={{ fontSize: '0.8rem', height: '5.9vh', width: '98%', paddingLeft: '0.6em' }} value={stateAddTask.taskInfo.title} onChange={this.titleChange}></input>)}
                  { !isAdmin() && (<textarea
                    type="text"
                    placeholder="Enter Description"
                    style={{ height: '14.5vh', width: '100%', fontSize: '0.8rem' }}
                    onChange={this.desChange}
                    value={stateAddTask.taskInfo.description}
                  />)}
                </div>
                <div className="all-100">
                  <TaskTab
                    pickupCord={pickupCord}
                    deliveryCord={deliveryCord}
                    pickupChange={pickupChange}
                    stateAddTask={stateAddTask}
                    deliveryChange={deliveryChange}
                  />
                </div>
                { isAdmin() && (<div className="all-100">
                  <div className="ink-flex" style={{ marginLeft: '1em' }}>
                    <div className="control unstyled ink-flex" style={{ marginBottom: '0.8em' }} >
                      <div style={{ marginRight: '1em' }}><input type="radio" id="rb1" name="rb" value="auto" checked={stateAuto == 'auto'} onChange={this.setSelection}/><label htmlFor="rb1" style={{ marginLeft: '0.3em', color: '#9099b7' }}>Auto</label></div>
                      <div><input type="radio" id="rb2" name="rb" value="manual" checked={stateAuto == 'manual'} onChange={this.setSelection}/><label htmlFor="rb2" style={{ marginLeft: '0.3em', color: '#9099b7' }}>Manual</label></div>
                    </div>
                  </div>
                   <div className="ink-flex vertical">
                    <div style={{ margin: '0 0.3em' }}><TeamSelect stateTeamList={stateTeamList} teamSelect={teamSelect} /></div>
                    { !(stateAuto === 'auto') && <div style={{ margin: '0.2em 0.3em' }}>
                      <Select selectedPilots={stateSelectedPilots} stateOptedPilot={stateOptedPilot} pilotSelect={pilotSelect} />
                    </div> }
                  </div>
                </div>)}
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
