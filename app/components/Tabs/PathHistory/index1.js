import React from 'react';

let path;
let pathArray = [];
let polyline;
export default class PathHistory extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);
        this.state = {
          updated: false,
        };
        this.intiMap = this.intiMap.bind(this);
        this.pathHistory = this.pathHistory.bind(this);
        this.clearMap = this.clearMap.bind(this);
    }

    componentDidMount() {
        this.intiMap();
    }

    intiMap() {
        path = L.map('path', {
            center: [17.4622, 78.356],
            zoom: 13,
            zoomControl:false,
        });

        L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicHJ1ZGh2aXNheXMiLCJhIjoiY2l4aWxnM2xoMDAxMzJ3bzB2ajlpbzJ2eCJ9.L4CdTG9cSB-ADVYQXbH-hw', {
            maxZoom: 18,
        }).addTo(path);
        console.log(this.props.stateOrderInfo.status);
      setTimeout(function(){path.invalidateSize()});

      this.props.stateOrderInfo['pilot_movement'] &&
        this.props.stateOrderInfo['pilot_movement'].coordinates.forEach((arr) => pathArray.push([arr[1],arr[0]]));
      this.pathHistory();

    }
    componentDidUpdate(prevProps){
        if(this.props.stateOrderInfo['pilot_movement'] !== prevProps.stateOrderInfo['pilot_movement']) {
            this.clearMap();
            pathArray = [];
              if(this.props.stateOrderInfo['pilot_movement'].coordinates.length > 0) {
                this.props.stateOrderInfo['pilot_movement'].coordinates.map((arr) => {
                  pathArray.push([arr[1],arr[0]]);
                });
                this.pathUpdate();
              }
        }
      setTimeout(function(){path.invalidateSize()});
      }
  clearMap() {
    for(let i in path._layers) {
      if(path._layers[i]._path != undefined) {
        try {
          path.removeLayer(path._layers[i]);
        }
        catch(e) {
          console.log("problem with " + e + path._layers[i]);
        }
      }
    }
  }
    pathHistory(){
      polyline = L.polyline(pathArray, {color: 'red'}).addTo(path);
      this.setState({ updated: !this.state.updated });
    }
    pathUpdate() {
      if(this.state.updated){
        polyline.setLatLngs(pathArray);
      } else {
        polyline = L.polyline(pathArray, {color: 'red'}).addTo(path);
        this.setState({ updated: !this.state.updated });
      }
    }
    render() {
        return (
            <div id="path" style={{ height: '55vh' }}></div>
        );
    }
}
