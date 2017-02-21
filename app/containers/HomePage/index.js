/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import Map from '../../components/Map';
import './HomeStyle.css';
import Header from '../../components/Header';
import Targets from '../../components/Targets';
import Tasks from '../../components/Tasks';
import Pilots from '../../components/Pilots';
import Ranking from '../../components/Ranking';
import classnames from 'classnames';
import UserInfo from '../../components/UserInfo';
import Tabs from '../../components/Tabs';
import GroupBlock from '../../components/GroupBlock';
import AddTask from '../../components/AddTask';
import _ from 'lodash';
import checkAuth from '../checkAuth';

class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      compressed: false,
      pilotState: false,
      orderDetails: false,
      groupDisplay: false,
      addTask: false,
    };
    this.divTask = this.divTask.bind(this);
    this.divPilot = this.divPilot.bind(this);
    this.orderDetails = this.orderDetails.bind(this);
    this.groupDisplay = this.groupDisplay.bind(this);
    this.addTask = this.addTask.bind(this);
  }
  componentDidMount() {
    this.props.getStats();
    this.props.getTeams();
  }
  divTask() {
    this.setState({ compressed: !this.state.compressed });
  }
  divPilot() {
    this.setState({ compressed: !this.state.compressed });
    this.setState({ pilotState: !this.state.pilotState });
  }
  groupDisplay() {
    this.setState({ groupDisplay: !this.state.groupDisplay });
  }
  orderDetails() {
    this.setState({ orderDetails: !this.state.orderDetails });
  }
  addTask() {
    this.setState({ addTask: !this.state.addTask });
  }
  render() {
    const { compressed, pilotState, orderDetails, groupDisplay, addTask } = this.state;
    const { stats } = this.props;
    return (
      <section style={{ background: '#1f253d', color: '#fff' }}>
        <div className="ink-grid" style={{ padding: 0, margin: '0 0 0 3.5em' }}>
          <div className="column-group quarter-horizontal-gutters">
            <div className="all-75">
              <div className="column-group quarter-horizontal-gutters margin">
                <Targets />
                <Tasks divTask={this.divTask}
                  orderDetails={this.orderDetails}
                  orderBlock={this.props.orderexpand}
                  getStats={this.props.getStats}
                  searchText={this.props.searchText}
                  stats={this.props.stats}
                  {...this.props}
                />
                <Pilots divPilot={this.divPilot} groupDisplay={this.groupDisplay} stats={stats} />
                { addTask ? <div ref={(c) => { this.compress = c; }} className={classnames('marginTop', { 'all-60': !compressed, 'all-20': compressed })} style={{ height: '67vh' }}>
                  <Ranking compressed={compressed} />
                </div> : <div className="all-60 marginTop" style={{ height: '67vh' }}>
                  <AddTask
                    pickupCord={this.props.pickupCord}
                    deliveryCord={this.props.deliveryCord}
                    pCord={this.props.pickupcord}
                    dCord={this.props.deliverycord}
                    pickupChange={this.props.pickupChange}
                    stateAddTask={this.props.addTask}
                    addTaskInfo={this.props.addTaskInfo}
                    deliveryChange={this.props.deliveryChange}
                    postAddTask={this.props.postAddTask}
                  />
                </div>}
                {compressed && <div className="all-40 marginTop">{ pilotState && <UserInfo />}</div>}
                <div className="all-40 marginTop" style={{ height: '67vh' }}>
                  {!orderDetails ? <div className="boxShadow block-background" style={{ height: '67vh' }}>
                    { !groupDisplay ? <GroupBlock /> : null }
                  </div> : <Tabs /> }
                </div>
              </div>
            </div>
            <div className="all-25" style={{ height: '100vh' }}>
              <Map></Map>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  const { orderexpand, pickupcord, deliverycord, stats, searchText, addTask } = state.get('home');
  const homeData = state.get('home');
//   const ordersGet = () => {
//       getOrders();
//   }
//   const assignedOrders = () => {
//     const ordersData = ordersGet();
//     const Data = data.ordersData;
//     _.filter(Data, (assign) => {
//     return assign.status === 'ASSIGNED';
//   });
// };
//   const unassignedOrders = () => {
//     const ordersData = ordersGet();
//     const Data = data.ordersData;
//     _.filter(Data, (assign) => {
//     return assign.status === 'UNASSIGNED';
//   });
// };
//   const completedOrders = () => {
//     const ordersData = ordersGet();
//     const Data = data.ordersData;
//     _.filter(Data, (assign) => {
//     return assign.status === 'COMPLETED';
//   });
// };
  // console.log(assignedOrders());
  // console.log(unassignedOrders());
  // console.log(completedOrders());
  return {
    orderexpand,
    pickupcord,
    deliverycord,
    // assignedOrders,
    // unassignedOrders,
    // completedOrders,
    stats,
    searchText,
    homeData,
    addTask,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    orderExpand: (value) => { dispatch(actions.orderExpand(value)); },
    orderClose: (value) => { dispatch(actions.orderClose(value)); },
    pickupCord: (value) => { dispatch(actions.pickupCord(value)); },
    deliveryCord: (value) => { dispatch(actions.deliveryCord(value)); },
    getStats: () => { dispatch(actions.getStats()); },
    onSearch: (searchText) => { dispatch(actions.onSearch(searchText)); },
    getTeams: () => { dispatch(actions.getTeams()); },
    getTeamSales: (data) => { dispatch(actions.getTeamSales(data)); },
    pickupChange: (data) => { dispatch(actions.pickupChange(data)); },
    deliveryChange: (data) => { dispatch(actions.deliveryChange(data)); },
    addTaskInfo: (data) => { dispatch(actions.addTaskInfo(data)); },
    postAddTask: (data) => { dispatch(actions.postAddTask(data)); },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
