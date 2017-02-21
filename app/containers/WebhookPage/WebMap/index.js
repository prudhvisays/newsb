import React from 'react';
import L from 'leaflet';

let map;

export default class WebMap extends React.Component { //eslint-disable-line
  constructor() {
    super();
    this.leafletMap = this.leafletMap.bind(this);
    this.setview = this.setview.bind(this);
  }
  componentDidMount() {
    this.leafletMap();
  }

  // componentDidUpdate(prevProps) {
  //   const { fLat, fLng } = this.props.statefranchiseCord;
  //   if(prevProps.statefranchiseCord !== this.props.statefranchiseCord) {
  //     this.setview(fLat, fLng);
  //   }
  // }
  leafletMap() {
       const cloudmadeUrl = 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicHJ1ZGh2aXNheXMiLCJhIjoiY2l4aWxnM2xoMDAxMzJ3bzB2ajlpbzJ2eCJ9.L4CdTG9cSB-ADVYQXbH-hw';
       const cloudmade = new L.TileLayer(cloudmadeUrl, {maxZoom: 18});
        map = new L.Map('webMap', {layers: [cloudmade], center: new L.LatLng(17.4622, 78.356), zoom: 15, zoomControl:false });
  }

  setview(fLat, fLng) {
    map.setView(new L.LatLng(fLat, fLng), 15);
  }
  render() {
    return (
      <div id="webMap" style={{ height: '35vh' }}></div>
    );
  }
}
