import React from 'react';
import './MapStyle.css';

let searchBox;

export default class FrancMaps extends React.Component { //eslint-disable-line
  constructor(props) {
    super(props);
    this.geolocate = this.geolocate.bind(this);
    this.initAutocomplete = this.initAutocomplete.bind(this);
    this.searchBoxPlaces = this.searchBoxPlaces.bind(this);
  }
  componentDidMount() {
    this.initAutocomplete();
  }
  initAutocomplete() {
    searchBox = new google.maps.places.SearchBox( //eslint-disable-line
            document.getElementById('franchise-loc-search'));
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
    let fLat;
    let fLng;
    const places = searchbox.getPlaces();
    places.forEach((place) => {
      fLat = place.geometry.location.lat();
      fLng = place.geometry.location.lng();
    });
    this.props.postFrancCord({ fLat, fLng });
    if (places.length === 0) {
      window.alert('We did not find any places matching that search!'); //eslint-disable-line
    }
  }
  render() {
    return (
      <div id="locationField">
        <input
          id="franchise-loc-search"
          placeholder="Search address"
          onFocus={this.geolocate} type="text"
        />
      </div>
    );
  }
}
