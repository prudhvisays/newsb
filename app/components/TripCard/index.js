import React from 'react';
import profileImage from '../../Assets/profile-image.gif';

export default class TripCard extends React.Component { //eslint-disable-line
  render() {
    const { detailedInfo, customerName, orderStatus, orderAddress, orderPilot, orderTime } = this.props;
    return (
      <a onClick={detailedInfo} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="marginBottom">
          <div className="trip-card third-boxShadow block-card-background" style={{ fontSize: '0.7rem', padding: '1em' }}>
            <div className="first-row ink-flex" style={{ paddingBottom: '0.3em' }}>
              <div className="all-70 ink-flex push-left">
                <div className="trip-image">
                  <div className="trip-pic" style={{ width: '30px', height: '30px', borderRadius: '50%', overflow: 'hidden', margin: 0 }}>
                    <img src={profileImage} alt="default-card" style={{ height: '30px', width: '100%' }} />
                  </div>
                </div>
                <div className="trip-info ink-flex vertical" style={{ marginLeft: '0.7em' }}>
                  <div className="sub-title">title</div>
                  <div>{customerName}</div>
                </div>
              </div>
              <div className="all-30 ink-flex push-right">
                <div className="trip-info">
                  <div>{orderStatus}</div>
                </div>
              </div>
            </div>
            <div className="second-row ink-flex">
              <div className="all-70 ink-flex push-left">
                <div className="trip-info ink-flex vertical">
                  <div className="sub-title">Address</div>
                  <div>{`${orderAddress ? orderAddress.substring(0, 70) : ''}...`}</div>
                </div>
              </div>
              <div className="all-30 ink-flex push-right">
                <div className="trip-info ink-flex vertical" style={{ textAlign: 'right' }}>
                  <div className="sub-title">Pilot</div>
                  <div>{orderPilot}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="ink-flex push-center"><div className="sub-title">{ this.props.orderStatus !== 'success' ? `Created At` : `Finished At` } {orderTime}</div></div>
        </div>
      </a>
    );
  }
}
