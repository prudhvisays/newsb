import React from 'react';
import profileImage from '../../Assets/profile-image.gif';

export default class PilotCard extends React.Component { //eslint-disable-line
  render() {
    const { detailedInfo, pilotName, pilotStatus, totalTask, completedTask, pilotDistance } = this.props;
    return (
      <a onClick={detailedInfo} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="trip-card pilot-boxShadow block-card-background marginBottom" style={{ fontSize: '0.7rem', padding: '1em' }}>
          <div className="ink-flex" style={{ paddingBottom: '0.3em' }}>
            <div className="all-50 ink-flex push-left">
              <div className="trip-image">
                <div className="trip-pic" style={{ width: '30px', height: '30px', borderRadius: '50%', overflow: 'hidden', margin: 0 }}>
                  <img src={profileImage} alt="default-card" style={{ height: '30px', width: '100%' }} />
                </div>
              </div>
              <div className="trip-info ink-flex vertical" style={{ marginLeft: '0.7em' }}>
                <div className="sub-title">Pilot</div>
                <div>{pilotName}</div>
              </div>
            </div>
            <div className="all-50 ink-flex push-right">
              <div className="trip-info">
                <div className={ pilotStatus !== 'Offline' ? 'ink-label green' : 'ink-label red' }>{pilotStatus}</div>
              </div>
            </div>
          </div>
          {/*<div className="second-row ink-flex">*/}
            {/*<div className="all-50 ink-flex push-left">*/}
              {/*<div className="trip-info ink-flex vertical">*/}
                {/*<div className="sub-title">Tasks Completed</div>*/}
                {/*<div>{completedTask} of {totalTask}</div>*/}
              {/*</div>*/}
            {/*</div>*/}
            {/*<div className="all-50 ink-flex push-right">*/}
              {/*<div className="trip-info ink-flex vertical" style={{ textAlign: 'right' }}>*/}
                {/*<div className="sub-title">Travelled so far</div>*/}
                {/*<div>{pilotDistance}</div>*/}
              {/*</div>*/}
            {/*</div>*/}
          {/*</div>*/}
        </div>
      </a>
    );
  }
}
