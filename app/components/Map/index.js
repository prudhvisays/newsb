import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer, Path, Polyline } from 'react-leaflet';
import FullscreenControl from 'react-leaflet-fullscreen';
import ExtendedMarker from './ExtendedMarker';

import auth from '../../Api/Auth';
import MapStyle from './MapStyle';
export default class PathHistory extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);
        this.state = {
            lat: 17.4622,
            lng: 78.356,
            zoom: 11,
        };
        this.handleLeafletLoad = this.handleLeafletLoad.bind(this);
        this.getBounds = this.getBounds.bind(this);
    }

    componentDidMount(){
        const session = () => JSON.parse(localStorage.getItem('sessionData'));
        if (auth.loggedIn() && !!session()) {
            if(session().customer) {
                const pLat = session().customer.location.coordinates[1];
                const pLng = session().customer.location.coordinates[0];
                this.props.pickupCord({ pLat, pLng });
            }
        }
    }
  componentDidUpdate(prevProps) {
    if(this.props.pilotId !== prevProps.pilotId) {
      let pilot = this[this.props.pilotId];
      pilot.leafletElement.openPopup();
    }
  }
    handleLeafletLoad() {
        if (this.pathMap) {
            this.pathMap.leafletElement.invalidateSize();
        }
    }

    getBounds() {
        if(this.pathMap) {
            return this.pathMap.leafletElement.getBounds
        }
    }
    render() {
        const { stateOrderList, statePilotList, pilotId } = this.props;
        const myOrderIcon = L.divIcon({
            className: 'my-order-icon'
        });
        const myOfflineIcon = L.divIcon({
            className: 'my-offline-icon'
        });
        const myAvailableIcon = L.divIcon({
            className: 'my-available-icon'
        });
        const orderMarkers = stateOrderList ? stateOrderList.map((list) => {
                return ( list.status !== 'COMPLETED' && <Marker icon={myOrderIcon} key={list._id} position={list.pilot_movement.coordinates[0] ? list.pilot_movement.coordinates.slice(-1)[0].reverse() : [0,0]}>
                  <Popup>
                    <span>{list.pilot ? list.pilot.user ? list.pilot.user.firstName : '-' : '-'}</span>
                    <span>{list.pilot ? list.pilot.user ? list.pilot.user.mobileNumber : '-' : '-'}</span>
                  </Popup>
                </Marker>)
            }) : null
        const pilotMarkers = statePilotList ? statePilotList.map((list) => {
                return ( <Marker selectedPilotId={pilotId} ref={(composed) => this[list._id] = composed} pilotId={list._id}
                                         icon={list.isAvailable ? myAvailableIcon : myOfflineIcon} key={list._id} position={list.location && list.location.coordinates[0] ? list.location.coordinates.reverse() : [0,0]}>
                  <Popup>
                    <div className="ink-flex vertical">
                      <div>{list.user ? list.user.firstName ? list.user.firstName : '-' : '-'}</div>
                      <div>{list.user ? list.user.firstName ? list.user.mobileNumber : '-' : '-'}</div>
                    </div>
                  </Popup>
                </Marker>)
            }) : null
        return (
            <MapStyle
                ref={(map) => { this.pathMap = map; }}
                center={[this.state.lat, this.state.lng]}
                zoom={this.state.zoom}
                zoomControl={false}
                className='pathMap'
                style={{ height: '100vh' }}
            >
              <TileLayer
                  url='https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicHJ1ZGh2aXNheXMiLCJhIjoiY2l4aWxnM2xoMDAxMzJ3bzB2ajlpbzJ2eCJ9.L4CdTG9cSB-ADVYQXbH-hw'
              />
                {pilotMarkers}
                <FullscreenControl position="topright" />
            </MapStyle>
        );
    }
}
