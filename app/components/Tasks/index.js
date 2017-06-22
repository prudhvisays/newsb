import React from 'react';
import Feed from '../Feed';
import TripCard from '../TripCard';
import Search from '../Search';
import classNames from 'classnames';
import Flatpickr from 'react-flatpickr';
import moment from 'moment';
import OrderStyle from './OrderStyle';

export default class Tasks extends React.Component { //eslint-disable-line
  constructor() {
    super();
    this.state = {
      expand: false,
      data: [],
      intervalId: '',
    };
    this.taskExpand = this.taskExpand.bind(this);
    this.detailedInfo = this.detailedInfo.bind(this);
    this.closeOrders = this.closeOrders.bind(this);
    this.searchText = this.searchText.bind(this);
    this.emitSearch = this.emitSearch.bind(this);
    this.pickDate = this.pickDate.bind(this);
  }

  componentDidUpdate(prevProps) {
    if(this.props.closeOrderExpand !== prevProps.closeOrderExpand) {
      this.closeOrders();
    }
  }

  taskExpand() {
    const taskDiv = document.querySelector('.taskExpand');
    const listShow = document.querySelector('.listShow');
    const closeTag = document.querySelector('.closeTag');
    if (!this.props.orderBlock && this.props.isAdmin()) {
      taskDiv.style.height = '92vh';
      listShow.style.opacity = '1';
      listShow.style.display = 'block';
      closeTag.style.top = '-2px';
      this.props.orderClose(true);
      this.props.divTask();
    }
  }
  detailedInfo(data) {
    this.props.orderDetails();
    this.props.getOrderDetail(data);
  }
  closeOrders() {
    const taskDiv = document.querySelector('.taskExpand');
    const listShow = document.querySelector('.listShow');
    const closeTag = document.querySelector('.closeTag');
    if (this.props.orderBlock && this.props.isAdmin()) {
      taskDiv.style.height = '24vh';
      listShow.style.opacity = '0';
      listShow.style.display = 'none';
      closeTag.style.top = '-20px';
      this.props.orderExpand(false);
      this.props.divTask();
      this.props.closeOrderDetails();
      this.props.clearOrderDetails();
    }
  }
  searchText(e) {
    this.emitSearch(e.target.value);
  }
  emitSearch(newSearch) {
    this.props.onSearchOrderAttr(newSearch);
  }
  pickDate(date) {
    const selectedDate = moment(date[0]).format('YYYYMMDD');
    this.props.setDateRange({ fromDate: selectedDate, toDate: null });
    this.props.getOrder({ isDateSelected: true });
  }
  render() {
    const { expand, data } = this.state;
    const { stats, stateOrders, isAdmin, orderStats, orderId } = this.props;
    const orderUser = {
      marginTop: '2.65em',
      display: isAdmin() ? 'none': 'block',
      opacity: isAdmin() ? '0' : '1',
      transition: 'all 500ms cubic-bezier(0.250, 0.250, 0.750, 0.750)',
    }
    return (
      <div className={ isAdmin() ? 'all-65 marginTop' : 'all-100 marginTop'} style={{ height: '24vh' }}>
        <OrderStyle className={classNames('boxShadow liner taskExpand block-background', { progressLiner: stats.request })} manager={isAdmin()} >
          <div className={classNames('orders-block', 'ink-flex', { indeterminate: stats.request })}>
            <div className="all-100" style={{ padding: '0.5em 0.8em' }}>
              <div className="ink-flex">
                <div className="all-70">
                  <div className="team-search" style={{ width: '100%' }}>
                    <Search placeHolder={'Search Orders'} searchText={this.searchText} />
                  </div>
                </div>
                <div className="all-30" style={{ textAlign: 'right' }}>
                  <Flatpickr options={{ defaultDate: new Date() }} style={{ width: '92px', color: '#333' }} onChange={this.pickDate} />
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div style={{ padding: '0.6em 0.8em' }}>
            <div className="ink-flex" style={{ position: 'relative' }}>
              <div className="all-100 block-stats-background" style={{ position: 'relative', zIndex: '1' }}>
                <Feed tasksExpand={this.taskExpand} stats={stats} orderStats={orderStats}/>
              </div>
              <div className="all-100 closeTag">
                <a className="ink-flex push-right closeFeed" onClick={this.closeOrders}>Close</a>
              </div>
            </div>
            {/* <div className="search" style={{ marginTop: '14px', width: '20.90em' }}>
              <div className="wrapper">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input type="text" placeholder="Search" style={{ width: '100%', outline: 'none' }} />
              </div>
            </div> */}
            <div className="listShow" style={orderUser}>
              { stateOrders.map((order) => {
                const date = moment(order.createdAt).format('YYYY-MM-DD HH:mm');
                return (
                  <TripCard orderId={orderId} id={order._id} key={order._id} detailedInfo={() => {this.detailedInfo(order._id)}} customerName={order.id} orderStatus={order.status} orderAddress={order.to_address} orderPilot={order.pilot ? order.pilot.user.firstName : '-'} orderTime={date} />
                );
              })}
            </div>
          </div>
        </OrderStyle>
      </div>
    );
  }
}
