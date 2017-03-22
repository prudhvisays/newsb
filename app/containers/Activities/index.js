import React from 'react';
import { connect } from 'react-redux';

class Activities extends React.Component {
  render() {
    return (
      <div className="container-fluid ml-4">
        <div className="d-flex flex-row">
          <div className="activity" style={{ height: '84vh', width: '30%'}}>
            <div className="card p-2" style={{ height: '84vh'}}>{this.props.children}</div>
          </div>
          <div className="activity-map" style={{ height: '84vh', width: '70%'}}>
            <div className="card" style={{ height: '84vh' }}>psdsds</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Activities;
