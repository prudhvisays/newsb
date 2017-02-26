import React from 'react';

export default class AddressBlock extends React.Component { //eslint-disable-line
  render() {
    const { Title, name, phone, email, address } = this.props;
    return (
      <div className="ink-flex second-boxShadow tab-second-row">
        <div className="all-100">
          <div className="ink-flex vertical">
            <div className="fw-700 sub-title">{Title}</div>
            <div>{name}</div>
          </div>
          <div className="ink-flex">
            <div className="all-50">
              <div className="tab-block ink-flex vertical">
                <div className="fw-700 sub-title">Phone</div>
                <div>{phone}</div>
              </div>
            </div>
            <div className="all-50">
              <div className="tab-block ink-flex vertical">
                <div className="fw-700 sub-title">Mail</div>
                <div>{email}</div>
              </div>
            </div>
            <div className="all-100">
              <div className="tab-block ink-flex vertical">
                <div className="fw-700 sub-title">Address</div>
                <div>{address}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
