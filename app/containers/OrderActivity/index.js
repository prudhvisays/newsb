import React from 'react';
import { connect } from 'react-redux';
import OrderCard from '../../components/OrderCard';
import OrderActivityStyle from './OrderActivityStyle';
import { createStructuredSelector } from 'reselect';


class OrderActivity extends React.Component {
  render() {
    return (
      <OrderActivityStyle className="order-activity">
        <div className="activity-stats d-flex justify-content-around p-1">
          <div className="d-flex flex-column align-items-center">
            <div>23</div>
            <div>Active</div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>23</div>
            <div>Active</div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>23</div>
            <div>Active</div>
          </div>
        </div>
        <OrderCard />
      </OrderActivityStyle>
    );
  }
}



export default OrderActivity;
