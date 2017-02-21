import React from 'react';
import MapStyle from './MapStyle';

export default class Map extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.intiMap = this.intiMap.bind(this);
  }

  componentDidMount() {
    this.intiMap();
  }

  intiMap() {
    const map = new google.maps.Map(document.querySelector('#Map'), { // eslint-disable-line
      center: { lat: 17.387140, lng: 78.491684 },
      zoom: 14,
    });
  }
  render() {
    return (
      <MapStyle id="Map"></MapStyle>
    );
  }
}
