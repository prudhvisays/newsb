import React from 'react';
import { Map, Marker, Popup, TileLayer, Path, Polyline } from 'react-leaflet';

export default class extends Marker {
  componentDidMount() {
    super.componentDidMount();
  }
  componentDidUpdate(prevProps) {
    if(this.props.selectedPilotId !== prevProps.selectedPilotId) {
      let pilot = this[this.props.selectedPilotId];
      pilot.leafletElement.openPopup();
    }
  }
}
