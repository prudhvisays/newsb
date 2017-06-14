import React from 'react';
import PilotTripCard from '../PilotTripCard';
import TripCard from '../TripCard';
import moment from 'moment';
import UserInfoStyle from './UserInfoStyle';
import profileImage from '../../Assets/profile-image.gif';
import ToggleButton from '../ToggleButton';
import Spinner from '../Spinner';

export default class UserInfo extends React.Component { //eslint-disable-line
  constructor(props) {
    super(props);
    this.formatTime = this.formatTime.bind(this);
  }
  formatTime(time) {
    return  moment(time).locale('en').format('YYYY-MM-DD HH:mm');
  }
  render() {
    const { statePilotInfo, statePilotStatus, closeDivPilot, detailsColToggle, dateRangePilot } = this.props
    const {
      getDetailsColToggle,
      pilotLocation,
      getPilotReports,
      pilotDateRange,
      pilotForceLogout,
      pilotLogoutStatus
    } = this.props
    const orders = this.props.statePilotInfo.orders && this.props.statePilotInfo.orders.map((order) => (
        <PilotTripCard key={order._id} pilotStatus={`${order.id} - Completed at ${this.formatTime(order.pilot_completed_date_time)}`} customer={order.from_name} pilotDistance={`${order.distance_in_meters/1000}`}/>
      ));
    return (
      <UserInfoStyle className="boxShadow user-scroll block-background" style={{ height: '67vh', position: 'relative' }}>
        <div className="ink-flex push-right closeButton" onClick={closeDivPilot}><i className="fa fa-times-circle" aria-hidden="true" /></div>
        { !statePilotStatus ? ( <div className="user-info" style={{ padding: '0.4em' }}>
            <div className="ProfileInfo ink-flex">
               <div className="all-40 profile-block">
                 <div className="ink-flex">
                   <div className="profile-pic">
                     <img src={profileImage} alt="default-card"/>
                   </div>
                 </div>
                <div className="profile-details">
                 <div className="Profile-title">
                   <div className="ink-flex push-center">
                     <div>
                       <h3 style={{ margin: 0, color: '#6bc9c5' }}>{`${statePilotInfo.pilot.user.firstName} ${statePilotInfo.pilot.user.lastName}`}</h3>
                     </div>
                   </div>
                 </div>
                  <div className="profile-phone">
                    <i className="fa fa-phone" aria-hidden="true" />
                    <span className="sub-text">{statePilotInfo.pilot.user.mobileNumber}</span>
                  </div>
                 <div className="profile-status" style={{ fontSize: '0.8rem' }}>
                   <div className="ink-flex">
                     <div className="battery-status">
                       <span className="fab-100"><i className="fa fa-battery-three-quarters"/>{statePilotInfo.pilot.battery || 0}%</span>
                     </div>
                     <div className="divider"><span> | </span></div>
                     <div className="online-status">
                       <span className={ statePilotInfo.pilot.isAvailable ? 'ink-label green' : 'ink-label red' }>{ statePilotInfo.pilot.isAvailable ? (statePilotInfo.pilot.isActive ? 'Active' : 'Idle') : 'Offline' }</span>
                     </div>
                   </div>
                 </div>
               </div>
               </div>
                <div className="all-60">
                  <div>
                  <ToggleButton
                    isAvailable={statePilotInfo.pilot && statePilotInfo.pilot.isAvailable}
                    getDetailsColToggle={getDetailsColToggle}
                    detailsColToggle={detailsColToggle}
                    getPilotReports={getPilotReports}
                    pilotDateRange={pilotDateRange}
                    dateRangePilot={dateRangePilot}
                    pilotForceLogout={pilotForceLogout}
                    pilotLogoutStatus={pilotLogoutStatus}
                  />
                  </div>
                </div>
            </div>
              <div className="ink-flex push-center">
                <div className="sub-title" style={{ textAlign: 'center' }}><i className="fa fa-map-marker" style={{ fontSize: '0.8rem' }}/> {pilotLocation ? pilotLocation.address : '...'}</div>
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
                    <div>{ statePilotInfo.amount.toFixed(3) }</div>
                    <div className="sub-title">Amount</div>
                  </div>
                </div>
                <div className="all-33 right-border">
                  <div className="ink-flex vertical push-middle profile-distance">
                    <div>{ (statePilotInfo.distanceInMeters/1000) } Km</div>
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
              { statePilotInfo.activeOrder && statePilotInfo.activeOrder.id &&
               <TripCard
                customerName={statePilotInfo.activeOrder.from_name}
                orderStatus={statePilotInfo.activeOrder.status}
                orderAddress={statePilotInfo.activeOrder.to_address}
                orderTime={this.formatTime(statePilotInfo.activeOrder.createdAt)} />
              }
              {orders}
            </div>
          </div>)
         : (<p style={{ textAlign : 'center', top : '50%', left : '40%', position : 'absolute' }}><Spinner/></p>)}
      </UserInfoStyle>
    );
  }
}
