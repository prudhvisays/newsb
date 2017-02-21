import React from 'react';
import Feed from '../Feed';
import TripCard from '../TripCard';
import Search from '../Search';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import classNames from 'classnames';

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
    this.loadOrders = this.loadOrders.bind(this);
    this.timer = this.timer.bind(this);
    this.searchText = this.searchText.bind(this);
    this.emitSearch = this.emitSearch.bind(this);
  }
  componentDidMount() {
    let datepicker = new Ink.UI.DatePicker( '.ink-datepicker' ); //eslint-disable-line
    const intervalId = setInterval(() => this.timer, 3000);
    this.setState({ intervalId });
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  timer() {
    this.setState({
      data: this.state.data.concat([boxMullerRandom()])
    });
  }

  taskExpand() {
    const taskDiv = document.querySelector('.taskExpand');
    const listShow = document.querySelector('.listShow');
    if (!this.props.orderBlock) {
      taskDiv.style.height = '98vh';
      listShow.style.opacity = '1';
      listShow.style.display = 'block';
      this.props.orderClose(true);
      this.props.divTask();
    } else {
      taskDiv.style.height = '30vh';
      listShow.style.opacity = '0';
      listShow.style.display = 'none';
      this.props.orderExpand(false);
      this.props.divTask();
    }
  }
  detailedInfo() {
    this.props.orderDetails();
  }
  loadOrders() {
    console.log(this.props.assignedOrders());
  }
  searchText(e) {
    this.emitSearch(e.target.value);
  }
  emitSearch(newSearch) {
    this.props.onSearch(newSearch);
  }
  render() {
    const { expand, data } = this.state;
    const { stats } = this.props;
    return (
      <div className="all-40 marginTop" style={{ height: '30vh' }}>
        <div className={classNames('boxShadow liner tasksExpand block-background', { progressLiner: stats.request })} style={{ height: '30vh', position: 'relative', transition: 'height 0.5s linear 0s', overflow: 'hidden' }}>
          <div className={classNames('orders-block', 'ink-flex', { indeterminate: stats.request })}>
            <div className="all-100" style={{ padding: '0.5em 0.8em' }}>
              <div className="ink-flex">
                <div className="all-70">
                  <div className="team-search" style={{ width: '100%' }}>
                    <Search placeHolder={'search Orders'} searchText={this.searchText} />
                  </div>
                </div>
                <div className="all-30" style={{ textAlign: 'right' }}>
                  <input type="text" className="ink-datepicker" data-format="d-m-Y" style={{ width: '92px', color: '#fff' }} />
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
              <div className="all-100" style={{ position: 'relative', zIndex: '1', background: '#394264' }}>
                <Feed tasksExpand={this.taskExpand} stats={stats}/>
              </div>
              <div className="all-100 closeTag">
                <a className="ink-flex push-right closeFeed" onClick={this.loadOrders}>Close</a>
              </div>
            </div>
            {/* <div className="search" style={{ marginTop: '14px', width: '20.90em' }}>
              <div className="wrapper">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input type="text" placeholder="Search" style={{ width: '100%', outline: 'none' }} />
              </div>
            </div> */}
            <div className="listShow" style={{ marginTop: '2.65em', display: 'none', opacity: '0', transition: 'all 0.5s linear 0s' }}>
              <TripCard detailedInfo={this.detailedInfo} customerName={'Pablo Escobar'} orderStatus={'live'} orderAddress={'Malakpet'} orderPilot={'Tyson'} orderTime={'11:30'} />
              <TripCard customerName={'Vayu'} orderStatus={'Pending'} orderAddress={'Madhapur'} orderPilot={'Mark'} orderTime={'11:00'} />
              <TripCard customerName={'Plomo'} orderStatus={'success'} orderAddress={'Kondapur'} orderPilot={'Kalayug'} orderTime={'10:50'} />
              <TripCard customerName={'Ferry'} orderStatus={'success'} orderAddress={'Madhapur'} orderPilot={'Gustavo'} orderTime={'10:40'} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
