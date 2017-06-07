import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer, Path, Polygon } from 'react-leaflet';
import FullscreenControl from 'react-leaflet-fullscreen';
import ExtendedMarker from './ExtendedMarker';
import { userRoleType, session } from '../../Api/ApiConstants';
import {latLngBounds, latLng} from 'leaflet'

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

    getBounds() {
      if(userRoleType() === 'isFranchise') {
        if(this.pathMap) {
          return this.pathMap.leafletElement.getBounds();
        }
      } else {
        if(this.pilotsPathMap) {
          return this.pilotsPathMap.leafletElement.getBounds();
        }
      }
    }

    render() {
        const { stateOrderList, statePilotList, pilotId, pilotsBounds} = this.props;
        const bounds = pilotsBounds && pilotsBounds.length > 1 ? latLngBounds(pilotsBounds) : latLng(pilotsBounds[0]);
        const myOrderIcon = L.divIcon({
            className: 'my-order-icon'
        });
        const myOfflineIcon = L.divIcon({
            className: 'my-offline-icon'
        });
        const myAvailableIcon = L.divIcon({
            className: 'my-available-icon'
        });
        let pilotBounds = [[[]]];

        const orderMarkers = stateOrderList ? stateOrderList.map((list) => {
                return ( list.status !== 'COMPLETED' && <Marker icon={myOrderIcon} key={list._id} position={list.pilot_movement.coordinates[0] ? list.pilot_movement.coordinates.slice(-1)[0].reverse() : [0,0]}>
                  <Popup>
                    <span>{list.pilot ? list.pilot.user ? list.pilot.user.firstName : '-' : '-'}</span>
                    <span>{list.pilot ? list.pilot.user ? list.pilot.user.mobileNumber : '-' : '-'}</span>
                  </Popup>
                </Marker>)
            }) : null
        const pilotMarkers = statePilotList ? statePilotList.map((list) => {
            pilotBounds[0][0].push(list.location.coordinates)
                return ( <Marker selectedPilotId={pilotId} ref={(composed) => this[list._id] = composed} pilotId={list._id}
                                         icon={list.isAvailable ? myAvailableIcon : myOfflineIcon} key={list._id} position={list.location && list.location.coordinates[0] ? list.location.coordinates.slice().reverse() : [0,0]}>
                  <Popup>
                    <div className="ink-flex vertical">
                      <div>{list.user ? list.user.firstName ? list.user.firstName : '-' : '-'}</div>
                      <div>{list.user ? list.user.firstName ? list.user.mobileNumber : '-' : '-'}</div>
                    </div>
                  </Popup>
                </Marker>)
            }) : null;

        let polybounds = [[[]]];
       userRoleType() === 'isFranchise'  && session().manager.franchise['geo_fence']['coordinates'][0][0].length > 0 &&
       session().manager.franchise['geo_fence']['coordinates'][0][0].map((line) => polybounds[0][0].push(line.slice().reverse()))

      const multi_polygon = userRoleType() === 'isFranchise' && session().manager.franchise['geo_fence']['coordinates'].length > 0 ?
        <Polygon  ref={(map) => { this.pathMap = map; }} color="lime" positions={polybounds[0][0].length>0 ? polybounds : [[[[83.30845177173616, 17.68687648220767], [83.23051750659944, 17.672156637595997]]]]} /> : null;

       const pilot_multi_polygon = userRoleType() !== 'isFranchise' && pilotsBounds.length > 0 ?
        <Polygon  ref={(comp) => { this.pilotsPathMap = comp; }} color="lime" positions={pilotsBounds.length>0 ? [[pilotsBounds]] : [[[[83.30845177173616, 17.68687648220767], [83.23051750659944, 17.672156637595997]]]]} /> : null;

     const franchiseMarker =  userRoleType() === 'isFranchise'  && session().manager.franchise ? <Marker position={session().manager.franchise.location && session().manager.franchise.location.coordinates[0] ? session().manager.franchise.location.coordinates.slice().reverse() : [0,0]}>
                        <Popup>
                          <div className="ink-flex vertical">
                            <div>ME</div>
                          </div>
                        </Popup>
                      </Marker> : null
      const mapProps = {
      animate: true,
      center:[this.state.lat, this.state.lng],
      zoom: this.state.zoom,
      zoomControl:false,
      className: 'pathMap',
      style:{ height: '93vh' }
      }
      if(userRoleType() === 'isFranchise') {
         userRoleType() === 'isFranchise' ? mapProps.bounds = this.getBounds() : null;
      } else {
        pilotsBounds.length > 1 ? mapProps.bounds = bounds : mapProps.center = bounds;
      }
       return (
            <MapStyle
              {...mapProps}
            >
              <TileLayer
                  url='https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicHJ1ZGh2aXNheXMiLCJhIjoiY2l4aWxnM2xoMDAxMzJ3bzB2ajlpbzJ2eCJ9.L4CdTG9cSB-ADVYQXbH-hw'
              />
                {pilotMarkers}
              {multi_polygon}
              {franchiseMarker}
                <FullscreenControl position="topright" />
            </MapStyle>
        );
    }
}
