import React from 'react';
import './ReSearch.css';

let searchBox;

export default class DeliveryLocation extends React.Component { //eslint-disable-line
    constructor(props) {
        super(props);
        this.geolocate = this.geolocate.bind(this);
        this.initAutocomplete = this.initAutocomplete.bind(this);
        this.searchBoxPlaces = this.searchBoxPlaces.bind(this);
        this.emitChange = this.emitChange.bind(this);
    }
    componentDidMount() {
        this.initAutocomplete();
    }
    initAutocomplete() {
        searchBox = new google.maps.places.SearchBox( //eslint-disable-line
            document.querySelector('.delivery-loc'));
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
        let dLat;
        let dLng;
        let address = '';
        const places = searchbox.getPlaces();
        places.forEach((place) => {
            dLat = place.geometry.location.lat();
            dLng = place.geometry.location.lng();
            address = place.formatted_address;
        });
        const { stateData } = this.props;
        this.emitChange({...stateData, to_address: address, to_location: { ...stateData.to_location, coordinates:[dLng, dLat]}});
        if (places.length === 0) {
            window.alert('We did not find any places matching that search!'); //eslint-disable-line
        }
    }
    emitChange(newFormState) {
        this.props.reOrder(newFormState);
    }
    render() {
        return (
            <div className="deliveryField">
                <input
                    className="delivery-loc"
                    placeholder="Search address"
                    onFocus={this.geolocate} type="text"
                />
            </div>
        );
    }
}
