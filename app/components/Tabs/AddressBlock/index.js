import React from 'react';

export default class AddressBlock extends React.Component { //eslint-disable-line
  render() {
    const { Title } = this.props;
    return (
      <div className="ink-flex second-boxShadow tab-second-row">
        <div className="all-100">
          <div className="ink-flex vertical">
            <div className="fw-700 sub-title">{Title}</div>
            <div>Pablo Escobar</div>
          </div>
          <div className="ink-flex">
            <div className="all-50">
              <div className="tab-block ink-flex vertical">
                <div className="fw-700 sub-title">Phone</div>
                <div>98383082028</div>
              </div>
            </div>
            <div className="all-50">
              <div className="tab-block ink-flex vertical">
                <div className="fw-700 sub-title">Mail</div>
                <div>gustavo@gmail.com</div>
              </div>
            </div>
            <div className="all-100">
              <div className="tab-block ink-flex vertical">
                <div className="fw-700 sub-title">Address</div>
                <div>7/13/12 malakapet narcos street hyderabad telangana 50004</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
