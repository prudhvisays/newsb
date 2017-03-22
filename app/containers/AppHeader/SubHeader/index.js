import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router';


class SubHeader extends React.Component {
  render() {
    return (
      <div id="sub-header" className="container-fluid">
        <div className="nav justify-content-left">
          <div className="left-column">
            <div className="d-flex flex-row">
              <div className="p-2"><input type="text" className="form-control" placeholder="Search for..." /></div>
              <div className="p-2">Activities</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubHeader;
