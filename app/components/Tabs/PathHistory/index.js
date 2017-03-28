import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer, Path, Polyline } from 'react-leaflet';

export default class PathHistory extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);
      this.state = {
        lat: 17.4622,
        lng: 78.356,
        zoom: 11,
      };
      this.handleLeafletLoad = this.handleLeafletLoad.bind(this);
      this.polylinePos = this.polylinePos.bind(this);
      this.fromLocation = this.fromLocation.bind(this);
      this.toLocation = this.toLocation.bind(this);
      this.centerPosition = this.centerPosition.bind(this);
    }

    handleLeafletLoad() {
      if (this.pathMap) {
        this.pathMap.leafletElement.invalidateSize();
      }
    }
    polylinePos() {
      if(this.props.stateOrderInfo['pilot_movement']) {
        if(this.props.stateOrderInfo['pilot_movement'].coordinates.length > 0) {
          return this.props.stateOrderInfo['pilot_movement'].coordinates.map((cord) => {
            return [cord[1],cord[0]];
          })
        }
      }
    }
    fromLocation(from) {
        if(from && from.coordinates.length > 0) {
          return [from.coordinates[1], from.coordinates[0]];
        }
    }

    toLocation(to) {
      if(to && to.coordinates.length > 0) {
        return [to.coordinates[1], to.coordinates[0]];
      }
    }
    centerPosition(from, to) {
      if(from && to ) {
        if(from.coordinates.length > 0 && to.coordinates.length > 0) {
          return [from.coordinates[1], to.coordinates[0]];
        }
      }
    }
    render() {
      const latlngs = this.polylinePos();
      const position = this.centerPosition(this.props.stateOrderInfo.from_location, this.props.stateOrderInfo.to_location);
      const fromLocation = this.fromLocation(this.props.stateOrderInfo.from_location);
      const toLocation = this.toLocation(this.props.stateOrderInfo.to_location);
        return (
          <Map ref={(map) => { this.pathMap = map; }} center={position ? position : [this.state.lat, this.state.lng]} zoom={this.state.zoom} zoomControl={false} className='pathMap' onLoad={this.handleLeafletLoad()}>
            <TileLayer
              url='https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicHJ1ZGh2aXNheXMiLCJhIjoiY2l4aWxnM2xoMDAxMzJ3bzB2ajlpbzJ2eCJ9.L4CdTG9cSB-ADVYQXbH-hw'
            />
            <Marker position={fromLocation ? fromLocation : [1,1]}>
              <Popup>
                <span>PICKUP POINT</span>
              </Popup>
            </Marker>
            <Marker position={toLocation ? toLocation : [2,2]}>
              <Popup>
                <span>DESTINATION POINT</span>
              </Popup>
            </Marker>
              <Polyline positions={latlngs ? latlngs : [[1,1]]} />
          </Map>
        );
    }
}
