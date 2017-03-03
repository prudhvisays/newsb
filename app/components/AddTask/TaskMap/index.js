import React from 'react';
import MapStyle from './MapStyle';
import { AntPath } from 'leaflet-ant-path';
import auth from '../../../Api/Auth';

let map;
let newMarkerOne;
let newMarkerTwo;
let latlngs = [];
let antPolyline;

export default class TaskMap extends React.Component { //eslint-disable-line
  constructor() {
    super();
    this.leafletMap = this.leafletMap.bind(this);
    this.marker = this.marker.bind(this);
    this.markerTwo = this.markerTwo.bind(this);
    this.polyLine = this.polyLine.bind(this);
  }
  componentDidMount() {
    this.leafletMap();
    if (auth.loggedIn() && JSON.parse(localStorage.getItem('sessionData')).username === 'merchant') {
      const session = JSON.parse(localStorage.getItem('sessionData'));
      const pLat = session.customer.location.coordinates[1];
      const pLng = session.customer.location.coordinates[0];
      const name = session.customer.name;
      const phone = session.customer.user.mobileNumber;
      const email = session.customer.user.emailAddress;
      this.props.pickupCord({ pLat, pLng });
      this.props.pickupChange({ ...this.props.stateAddTask.pickup, from_name: name, from_phone: phone, from_email: email });
    }
}
componentDidUpdate(prevProps){
    const { pLat, pLng } = this.props.pCord;
    const { dLat, dLng } = this.props.dCord;
    if (prevProps.pCord !== this.props.pCord) {
      this.marker(pLat, pLng);
      }
    if (prevProps.dCord !== this.props.dCord) {
      this.markerTwo(dLat, dLng)
    }
}
  leafletMap() {
    map = L.map('mapid', {
      center: [17.4622, 78.356],
      zoom: 13,
      zoomControl:false,
    });

    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicHJ1ZGh2aXNheXMiLCJhIjoiY2l4aWxnM2xoMDAxMzJ3bzB2ajlpbzJ2eCJ9.L4CdTG9cSB-ADVYQXbH-hw', {
      maxZoom: 18,
    }).addTo(map);
  }

  polyLine(latlng) {
    antPolyline = new L.Polyline.AntPath(latlng);
    antPolyline.addTo(map);
    map.fitBounds(antPolyline.getBounds());
  }

  marker(pLat, pLng) {
    map.panTo(new L.LatLng(pLat, pLng), { animate: true, duration: 4.0 });
       if (typeof (newMarkerOne) === 'undefined') {
         newMarkerOne = new L.marker([pLat, pLng]);
         newMarkerOne.addTo(map);
         latlngs[0] = [pLat, pLng];
       } else {
         map.removeLayer(antPolyline);
         newMarkerOne.setLatLng([pLat, pLng]);
         latlngs[0] = [pLat, pLng];
         this.polyLine(latlngs)
       }
  }
  markerTwo(dLat, dLng) {
    if (typeof (newMarkerTwo) === 'undefined') {
      newMarkerTwo = new L.marker([dLat, dLng]);
      newMarkerTwo.addTo(map);
      latlngs[1] = [dLat, dLng];
      this.polyLine(latlngs)
    } else {
      newMarkerTwo.setLatLng([dLat, dLng]);
      latlngs[1] = [dLat, dLng];
      map.removeLayer(antPolyline);
      this.polyLine(latlngs)
    }
  }
  render() {
    const heightStyle = {
      height: this.props.isAdmin() ? '40vh' : '91vh',
    };
    return (
      <MapStyle id="mapid" style={ heightStyle }></MapStyle>
    );
  }
}
