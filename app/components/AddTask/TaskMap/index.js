import React from 'react';
import MapStyle from './MapStyle';
import L from 'leaflet';
import { AntPath } from 'leaflet-ant-path';
import Flag from '../flag-map-marker.png';
import FlagShadow from '../flag-map-marker-shadow.png';
import Tool from '../placeholder-tool.png';
import ToolShadow from '../placeholder-tool-shadow.png';
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
    const markerIcon1 = L.Icon.extend({
    options: {
        shadowUrl: 'FlagShadow',
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});
    const FlagIcon = new markerIcon1({iconUrl: 'Flag'});
    map.panTo(new L.LatLng(pLat, pLng), { animate: true, duration: 4.0 });
       if (typeof (newMarkerOne) === 'undefined') {
         newMarkerOne = new L.marker([pLat, pLng],{ icon: FlagIcon });
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
    return (
      <MapStyle id="mapid" style={{ height: '40vh' }}></MapStyle>
    );
  }
}
