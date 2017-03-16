import React from 'react';

let path;
let pathArray = []
export default class PathHistory extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);
        this.intiMap = this.intiMap.bind(this);
        this.pathHistory = this.pathHistory.bind(this);
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
        if(this.props.stateOrderInfo.status == 'COMPLETED') {
            const pathArray = [];
            this.props.stateOrderInfo['pilot_movement'].coordinates.map((arr) => {
                pathArray.push([arr[1],arr[0]]);
            })
            console.log(pathArray);
            this.pathHistory(pathArray);
            }
    }
    componentDidUpdate(prevProps){
        if(this.props.stateOrderInfo.status !== prevProps.stateOrderInfo.status) {
            if(this.props.stateOrderInfo.status == 'COMPLETED') {
                this.props.stateOrderInfo['pilot_movement'].coordinates.map((arr) => {
                    pathArray.push([arr[1],arr[0]]);
                })
                this.pathUpdate();
            }
        }
    }
    pathHistory(){
        console.log("PATH HISTORY" + pathArray);
        const polyline = L.polyline(pathArray, {color: 'red'}).addTo(path);

// zoom the map to the polyline
        path.fitBounds(polyline.getBounds());
    }
    pathUpdate() {
        path.setLatLngs(pathArray)
    }
    render() {
        return (
            <div id="path" style={{ height: '55vh' }}></div>
        );
    }
}
