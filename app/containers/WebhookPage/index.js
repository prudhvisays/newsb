import React from 'react';
import WebhookStyle from './WebhookStyle';
import WebMap from './WebMap';

class WebhookPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <WebhookStyle>
        <div className="ink-grid webhook-padding">
          <div className="column-group push-center small-quarter-horizontal-gutters small-vertical-gutters large-horizontal-gutters">
            <div className="xlarge-40 large-40 small-90">
              <div className="column-group">
                <div className="all-100 webhook-order-status">
                  <div className="webhook-col-height">
                    <div><blockquote>Order Status</blockquote></div>
                    <div className="ink-flex vertical">
                      <div className="all-100 webhook-col-back webhook-card">
                        <div className="ink-flex">
                          <div className="all-20"></div>
                          <div className="all-50"></div>
                        </div>
                      </div>
                      <div className="all-100 webhook-col-back webhook-card">
                        <div className="ink-flex">
                          <div className="all-20"></div>
                          <div className="all-50"></div>
                        </div>
                      </div>
                      <div className="all-100 webhook-col-back webhook-card">
                        <div className="ink-flex">
                          <div className="all-20"></div>
                          <div className="all-50"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xlarge-50 large-50 small-90">
              <div className="column-group">
                <div className="all-100">
                  <div><blockquote>Delivery Information</blockquote></div>
                  <div className="webhook-map-height">
                    <div className="all-100 webhook-col-back webhook-map webhook-card-padding">
                      <div className="ink-flex"></div>
                      <div className="all-40 small-90">
                        <div className="ink-flex vertical">
                          <div className="all-100">
                            <div className="ink-flex vertical">
                              <div className="webhook-subtitle">Name</div>
                              <div className="webhook-title">Rathod</div>
                            </div>
                          </div>
                          <div className="all-100">
                            <div className="ink-flex vertical">
                              <div className="webhook-subtitle">Phone Number</div>
                              <div className="webhook-title">9848883832</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="all-60 small-90">
                        <div className="ink-flex">
                          <div className="all-100">
                            <div className="ink-flex vertical">
                              <div className="webhook-subtitle">Email</div>
                              <div className="webhook-title">pala@gmail.com</div>
                            </div>
                          </div>
                          <div className="all-100">
                            <div className="ink-flex vertical">
                              <div className="webhook-subtitle">Address</div>
                              <div className="webhook-title">malakapet rajeev gandhi nagar jubilee hill, kokapet, madhapur, kondapur</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="all-100">
                      <WebMap />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WebhookStyle>
    );
  }
}

export default WebhookPage;
