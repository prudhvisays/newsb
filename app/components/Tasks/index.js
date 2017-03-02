import React from 'react';
import Feed from '../Feed';
import TripCard from '../TripCard';
import Search from '../Search';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import classNames from 'classnames';
import Flatpickr from 'react-flatpickr';
import moment from 'moment';
import OrderStyle from './OrderStyle';

function boxMullerRandom() {
    let phase = false,
        x1, x2, w, z;

    return (function() {

        if (phase = !phase) {
            do {
                x1 = 2.0 * Math.random() - 1.0;
                x2 = 2.0 * Math.random() - 1.0;
                w = x1 * x1 + x2 * x2;
            } while (w >= 1.0);

            w = Math.sqrt((-2.0 * Math.log(w)) / w);
            return x1 * w;
        } else {
            return x2 * w;
        }
    })();
}

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
    this.timer = this.timer.bind(this);
    this.searchText = this.searchText.bind(this);
    this.emitSearch = this.emitSearch.bind(this);
    this.pickDate = this.pickDate.bind(this);
  }
  timer() {
    this.setState({
      data: this.state.data.concat([boxMullerRandom()])
    });
  }

  taskExpand() {
    const taskDiv = document.querySelector('.taskExpand');
    const listShow = document.querySelector('.listShow');
    const closeTag = document.querySelector('.closeTag');
    if (!this.props.orderBlock && this.props.isAdmin()) {
      taskDiv.style.height = '98vh';
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
      taskDiv.style.height = '30vh';
      listShow.style.opacity = '0';
      listShow.style.display = 'none';
      closeTag.style.top = '-20px';
      this.props.orderExpand(false);
      this.props.divTask();
      this.props.closeOrderDetails();
    }
  }
  searchText(e) {
    this.emitSearch(e.target.value);
  }
  emitSearch(newSearch) {
    this.props.onSearch(newSearch);
  }
  pickDate(date) {
    const Date = moment(date[0]).format('YYYYMMDD');
    this.props.getTeamCustomers({fromDate: Date, toDate: Date });
  }
  render() {
    const { expand, data } = this.state;
    const { stats, stateOrders, isAdmin, orderStats } = this.props;
    const orderUser = {
      marginTop: '2.65em',
      display: isAdmin() ? 'none': 'block',
      opacity: isAdmin() ? '0' : '1',
      transition: 'all 500ms cubic-bezier(0.250, 0.250, 0.750, 0.750)',
    }
    return (
      <div className={ isAdmin() ? 'all-65 marginTop' : 'all-100 marginTop'} style={{ height: '30vh' }}>
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
                  <Flatpickr options={{ defaultDate: new Date() }} style={{ width: '92px', color: '#fff' }} onChange={this.pickDate} />
                </div>
              </div>
            </div>
          </div>
          <div style={{ padding: '0.6em 0.8em' }}>
            <div className="ink-flex" style={{ position: 'relative' }}>
              <div className="all-100">
                <Sparklines data={data} limit={20} width={100} height={10} margin={0}>
                  <SparklinesLine style={{ stroke: 'rgb(245, 37, 151)', strokeWidth: '0.5', fill: 'none' }} />
                  <SparklinesSpots size={1} />
                </Sparklines>
              </div>
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
                const date = moment(order.createdAt).local().format('YYYY-MM-DD HH:mm');
                return (
                  <TripCard key={order._id} detailedInfo={() => {this.detailedInfo(order._id)}} customerName={order.title} orderStatus={order.status} orderAddress={order.to_address} orderPilot={order.pilot ? 'new' : '-'} orderTime={date} />
                );
              })}
            </div>
          </div>
        </OrderStyle>
      </div>
    );
  }
}
