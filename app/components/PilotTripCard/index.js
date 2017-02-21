import React from 'react';

export default class PilotTripCard extends React.Component { //eslint-disable-line
  render() {
    const { detailedInfo, pilotStatus, totalTask, completedTask, pilotDistance } = this.props;
    return (
      <a onClick={detailedInfo} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="trip-card pilot-boxShadow block-background marginBottom" style={{ fontSize: '0.7rem', padding: '1em' }}>
          <div className="first-row ink-flex" style={{ paddingBottom: '0.3em' }}>
            <div className="all-100 ink-flex push-left">
              <div className="trip-info ink-flex vertical" style={{ marginLeft: '0.7em', fontSize: '1.2em' }}>
                <div>{pilotStatus}</div>
              </div>
            </div>
          </div>
          <div className="second-row ink-flex">
            <div className="all-50 ink-flex push-left">
              <div className="trip-info ink-flex vertical">
                <div className="sub-title">Tasks Completed</div>
                <div>{completedTask} of {totalTask}</div>
              </div>
            </div>
            <div className="all-50 ink-flex push-right">
              <div className="trip-info ink-flex vertical" style={{ textAlign: 'right' }}>
                <div className="sub-title">Travelled so far</div>
                <div>{pilotDistance} Km</div>
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }
}
