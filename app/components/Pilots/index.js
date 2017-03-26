import React from 'react';
import PilotFeed from '../PilotFeed';
import PilotCard from '../PilotCard';
import classNames from 'classnames';

export default class Pilots extends React.Component { //eslint-disable-line
  constructor() {
    super();
    this.state = {
      expand: false,
      data: [],
      intervalId: '',
    };
    this.taskExpand = this.taskExpand.bind(this);
    this.detailedInfo = this.detailedInfo.bind(this);
    this.closePilot = this.closePilot.bind(this);
  }

  taskExpand() {
    const taskDiv = document.querySelector('.TaskExpand');
    const listShow = document.querySelector('.ListShow');
    const closeTag = document.querySelector('.closePilotTag');
    if (!this.state.expand) {
      this.props.groupDisplay();
      taskDiv.style.height = '98vh';
      listShow.style.opacity = '1';
      listShow.style.display = 'block';
      closeTag.style.top = '-2px'
      this.setState({ expand: true });
    }
  }
  closePilot() {
    const taskDiv = document.querySelector('.TaskExpand');
    const listShow = document.querySelector('.ListShow');
    const closeTag = document.querySelector('.closePilotTag');
    if(this.state.expand) {
        this.props.groupDisplay();
        taskDiv.style.height = '30vh';
        listShow.style.opacity = '0';
        listShow.style.display = 'none';
        closeTag.style.top = '-20px';
        this.setState({ expand: false });
        this.props.closeDivPilot();
    }
  }
  detailedInfo(id) {
    this.props.divPilot();
    this.props.getPilotDetail(id);
  }
  render() {
    const { data } = this.state;
    const { stats, statePilots } = this.props;
    return (
      <div className="all-100 marginTop" style={{ height: '30vh' }}>
        <div className={classNames('boxShadow', 'TaskExpand', 'block-background', 'PilotLiner', { pilotProgress: stats.request })} style={{ height: '30vh', position: 'relative', transition: 'height 0.5s linear 0s', overflow: 'hidden' }}>
          <div className={classNames('orders-block', 'ink-flex', { pilotIndeterminate: stats.request })}>
            <div className="all-100" style={{ padding: '0.5em 0.8em' }}>
              <div className="ink-flex">
                <div className="all-100">
                  <div className="team-search" style={{ width: '100%' }}>
                    <input type="text" placeholder="Search Pilots" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div style={{ padding: '0.6em 0.8em' }}>
            <div className="ink-flex" style={{ position: 'relative' }}>
              <div className="all-100 block-stats-background" style={{ position: 'relative', zIndex: '1' }}>
                <PilotFeed tasksExpand={this.taskExpand} stats={stats} />
              </div>
              <div className="all-100 closePilotTag">
                <a className="ink-flex push-right closePilotFeed" onClick={this.closePilot}>Close</a>
              </div>
            </div>
            {/* <div className="search" style={{ marginTop: '14px', width: '20.90em' }}>
              <div className="wrapper">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input type="text" placeholder="Search" style={{ width: '100%', outline: 'none' }} />
              </div>
            </div> */}
            <div className="ListShow" style={{ marginTop: '2.5em', display: 'none', opacity: '0', transition: 'all 0.5s linear 0s' }}>
              <div className="list-scroll">
                { statePilots.map((pilot) => {
                  return (
                    <PilotCard detailedInfo={() => { this.detailedInfo(pilot._id) }} key={pilot._id} pilotName={`${pilot.user.firstName} ${pilot.user.lastName}`} pilotStatus={pilot.isActive ? 'Active' : 'Offline' } totalTask={'5'} completedTask={'2'} pilotDistance={'20'}/>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
