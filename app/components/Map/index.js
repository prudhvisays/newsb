import React from 'react';
import '../../Assets/Leaflet.MovingMarker/MovingMarker';
import MapStyle from './MapStyle';

let trackMap;
export default class Map extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.intiMap = this.intiMap.bind(this);
    this.geojsonFeature = this.geojsonFeature.bind(this);
  }

  componentDidMount() {
    this.intiMap();
    this.geojsonFeature();
  }

  geojsonFeature() {
      return {

      }
  }

  intiMap() {
      const cloudmadeUrl = 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicHJ1ZGh2aXNheXMiLCJhIjoiY2l4aWxnM2xoMDAxMzJ3bzB2ajlpbzJ2eCJ9.L4CdTG9cSB-ADVYQXbH-hw';
      const cloudmade = new L.TileLayer(cloudmadeUrl, {maxZoom: 18});
      trackMap = new L.Map('trackMap', {layers: [cloudmade], center: new L.LatLng(17.4622, 78.356), zoom: 15 });
  }
  render() {
    return (
      <MapStyle id="trackMap" />
    );
  }
}
