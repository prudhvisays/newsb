import React from 'react';
import './MapStyle.css';

let searchBox;

export default class GMaps extends React.Component { //eslint-disable-line
  constructor(props) {
    super(props);
    this.geolocate = this.geolocate.bind(this);
    this.initAutocomplete = this.initAutocomplete.bind(this);
    this.searchBoxPlaces = this.searchBoxPlaces.bind(this);
    this.emitChanges = this.emitChanges.bind(this);
  }
  componentDidMount() {
    this.initAutocomplete();
  }
  initAutocomplete() {
    searchBox = new google.maps.places.SearchBox( //eslint-disable-line
            document.getElementById('places-search'));
    searchBox.addListener('places_changed', () => { //eslint-disable-line
      this.searchBoxPlaces(searchBox);
    });
  }
  geolocate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        const circle = new google.maps.Circle({ //eslint-disable-line
          center: geolocation,
          radius: position.coords.accuracy,
        });
        console.log(circle.getBounds()); //eslint-disable-line
        searchBox.setBounds(circle.getBounds());
      });
    }
  }
  searchBoxPlaces(searchbox) {
    let pLat;
    let pLng;
    let address = '';
    const places = searchbox.getPlaces();
    places.forEach((place) => {
      pLat = place.geometry.location.lat();
      pLng = place.geometry.location.lng();
      address = place.formatted_address;
    });
    this.props.pickupCord({ pLat, pLng });
    if (places.length === 0) {
      window.alert('We did not find any places matching that search!'); //eslint-disable-line
    }
         const { pickup } = this.props.stateAddTask;
         this.emitChanges({ ...pickup, from_address: address });
    }
  emitChanges(newFormState) {
    this.props.pickupChange(newFormState);
  }
  render() {
    return (
      <div id="locationField">
        <input
          id="places-search"
          placeholder="Search address"
          onFocus={this.geolocate} type="text"
          onChange={this.onChange}
        />
      </div>
    );
  }
}
