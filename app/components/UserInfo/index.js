import React from 'react';
import PilotTripCard from '../PilotTripCard';
import TripCard from '../TripCard';
import moment from 'moment';
import CloseButton from './CloseButton';
import profileImage from '../../Assets/profile-image.gif';

export default class UserInfo extends React.Component { //eslint-disable-line
  constructor(props) {
    super(props);
    this.formatTime = this.formatTime.bind(this);
  }
  formatTime(time) {
    return  moment(time).locale('en').format('YYYY-MM-DD HH:mm');
  }
  render() {
    const { statePilotInfo, statePilotStatus, closeDivPilot } = this.props
    const orders = this.props.statePilotInfo.orders && this.props.statePilotInfo.orders.map((order) => (
        <PilotTripCard key={order._id} pilotStatus={`Ended on ${this.formatTime(order.pilot_completed_date_time)}`} customer={order.from_name} pilotDistance={23}/>
      ));
    return (
      <div className="boxShadow user-scroll block-background" style={{ height: '67vh', position: 'relative' }}>
        <CloseButton className="ink-flex push-right" onClick={closeDivPilot}><i className="fa fa-times-circle" aria-hidden="true"></i></CloseButton>
        { !statePilotStatus ? ( <div className="user-info" style={{ padding: '1em' }}>
            <div className="ProfilePic">
              <div className="ink-flex push-center">
                <div className="profile-pic" style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', margin: 0, border: '6px double #51d4ff' }}>
                  <img src={profileImage} alt="default-card" style={{ height: '100px', width: '100%' }}></img>
                </div>
              </div>
            </div>
            <div className="Profile-title">
              <div className="ink-flex push-center">
                <div>
                  <h3 style={{ margin: 0, color: '#6bc9c5' }}>{`${statePilotInfo.pilot.user.firstName} ${statePilotInfo.pilot.user.lastName}`}</h3>
                </div>
              </div>
            </div>
            <div className="profile-status" style={{ fontSize: '0.8rem' }}>
              <div className="ink-flex push-center">
                <div className="online-status">
                  <span className={ statePilotInfo.pilot.isActive ? 'ink-label green' : 'ink-label red' }>{ statePilotInfo.pilot.isActive ? 'Active' : 'Offline' }</span>
                </div>
                <div className="divider"><span> | </span></div>
                <div className="battery-status">
                  <span className="fab-100">52% <i className="fa fa-battery-three-quarters"></i></span>
                </div>
              </div>
            </div>
            <div className="profile-timeline boxShadow" style={{ fontSize: '1rem' }}>
              <div className="ink-flex push-center first-row">
                <div className="all-50 right-border">
                  <div className="ink-flex vertical push-middle profile-tasks">
                    <div>{ statePilotInfo.completed }</div>
                    <div className="sub-title">Completed</div>
                  </div>
                </div>
                <div className="all-50">
                  <div className="ink-flex vertical push-middle profile-ontime">
                    <div>{ statePilotInfo.assigned }</div>
                    <div className="sub-title">Assigned</div>
                  </div>
                </div>
              </div>
              <div className="ink-flex push-center second-row">
                <div className="all-33 right-border">
                  <div className="ink-flex vertical push-middle profile-time">
                    <div>{ statePilotInfo.amount }</div>
                    <div className="sub-title">Amount</div>
                  </div>
                </div>
                <div className="all-33 right-border">
                  <div className="ink-flex vertical push-middle profile-distance">
                    <div>{ statePilotInfo.distanceInMeters }</div>
                    <div className="sub-title">Distance</div>
                  </div>
                </div>
                <div className="all-33">
                  <div className="ink-flex vertical push-middle profile-data">
                    <div>-</div>
                    <div className="sub-title">Rating</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="trips">
              <TripCard
                customerName={statePilotInfo.activeOrder.from_name}
                orderStatus={statePilotInfo.activeOrder.status}
                orderAddress={statePilotInfo.activeOrder.to_address}
                orderTime={() => { this.formatTime(statePilotInfo.activeOrder.createdAt); }} />
              {orders}
            </div>
          </div>)
         : (<p>LOADING</p>)}
      </div>
    );
  }
}
