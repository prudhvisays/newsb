import React from 'react';
import profileImage from '../../Assets/profile-image.gif';

export default class PilotInfo extends React.Component { //eslint-disable-line
  render() {
    const { detailedInfo } = this.props;
    return (
      <a onClick={detailedInfo} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="trip-card third-boxShadow block-background marginBottom" style={{ fontSize: '0.7rem', padding: '1em' }}>
          <div className="first-row ink-flex" style={{ paddingBottom: '0.3em' }}>
            <div className="all-50 ink-flex push-left">
              <div className="trip-image">
                <div className="trip-pic" style={{ width: '30px', height: '30px', borderRadius: '50%', overflow: 'hidden', margin: 0 }}>
                  <img src={profileImage} alt="default-card" style={{ height: '30px', width: '100%' }} />
                </div>
              </div>
              <div className="trip-info ink-flex vertical" style={{ marginLeft: '0.7em' }}>
                <div className="sub-title">customer</div>
                <div>Tyson</div>
              </div>
            </div>
            <div className="all-50 ink-flex push-right">
              <div className="trip-info">
                <div>LIVE</div>
              </div>
            </div>
          </div>
          <div className="second-row ink-flex">
            <div className="all-50 ink-flex push-left">
              <div className="trip-info ink-flex vertical">
                <div className="sub-title">Address</div>
                <div>Malakpet</div>
              </div>
            </div>
            <div className="all-50 ink-flex push-right">
              <div className="trip-info ink-flex vertical" style={{ textAlign: 'right' }}>
                <div className="sub-title">Driver</div>
                <div>Tyson</div>
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }
}
