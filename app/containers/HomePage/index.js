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
import classnames from 'classnames';
import { createStructuredSelector } from 'reselect';
import io from 'socket.io-client';
import * as actions from './actions';
import Map from '../../components/Map';
import './HomeStyle.css';
import Targets from '../../components/Targets';
import Tasks from '../../components/Tasks';
import Pilots from '../../components/Pilots';
import Ranking from '../../components/Ranking';
import UserInfo from '../../components/UserInfo';
import Tabs from '../../components/Tabs';
import GroupBlock from '../../components/GroupBlock';
import AddTask from '../../components/AddTask';
// import checkAuth from '../checkAuth';

const socket = io('https://season-boy-api.herokuapp.com').connect();

import * as selectors from './selectors';

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
    this.closeOrderDetails = this.closeOrderDetails.bind(this);
  }
  componentDidMount() {
    this.props.getStats();
    this.props.getTeams();
    this.props.getPilot();
    this.props.getOrder();
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
    if(!this.state.orderDetails) {
      this.setState({ orderDetails: !this.state.orderDetails });
    };
  }
  closeOrderDetails() {
    if (this.state.orderDetails) {
      this.setState({ orderDetails: !this.state.orderDetails });
    };
  }
  addTask() {
    this.setState({ addTask: !this.state.addTask });
  }
  render() {
    const { compressed, pilotState, orderDetails, groupDisplay, addTask } = this.state;
    const { stats } = this.props;
    console.log(this.props.teamsInfo);
    return (
      <section style={{ background: '#1f253d', color: '#fff' }}>
        <div className="ink-grid" style={{ padding: 0, margin: '0 0 0 3.5em' }}>
          <div className="column-group quarter-horizontal-gutters">
            <div className="all-75">
              <div className="column-group quarter-horizontal-gutters margin">
                <div className="all-60">
                  <div className="column-group quarter-horizontal-gutters">
                      <Targets stateOrderStats={this.props.stats.orderStats} />
                      <Tasks divTask={this.divTask}
                        orderDetails={this.orderDetails}
                        orderBlock={this.props.orderexpand}
                        getStats={this.props.getStats}
                        searchText={this.props.searchText}
                        stats={this.props.stats}
                        getTeamCustomers={this.props.getTeamCustomers}
                        closeOrderDetails={this.closeOrderDetails}
                        stateOrders={this.props.orderList}
                        getOrders={this.props.getOrders}
                        getOrderDetail={this.props.getOrderDetail}
                        {...this.props}
                      />
                      { !addTask && (<div className={classnames('marginTop', { 'all-100': !compressed, 'all-35': compressed })} style={{ height: '67vh' }}>
                        { !compressed && (<AddTask
                          pickupCord={this.props.pickupCord}
                          deliveryCord={this.props.deliveryCord}
                          pCord={this.props.pickupcord}
                          dCord={this.props.deliverycord}
                          pickupChange={this.props.pickupChange}
                          stateAddTask={this.props.addTask}
                          addTaskInfo={this.props.addTaskInfo}
                          deliveryChange={this.props.deliveryChange}
                          postAddTask={this.props.postAddTask}
                          clearForm={this.props.clearForm}
                          stateAuto={this.props.auto}
                          setSelection={this.props.setSelection}
                        />)}
                      </div>)}
                      {compressed && <div className="all-65 marginTop">{ pilotState && <UserInfo />}</div>}
                  </div>
                </div>
                <div className="all-40">
                  <div className="column-group">
                    <Pilots
                      divPilot={this.divPilot}
                      groupDisplay={this.groupDisplay}
                      stats={stats}
                      statePilots={this.props.pilotList}
                    />
                    <div className="all-100 marginTop" style={{ height: '67vh' }}>
                      {!orderDetails ? <div className="boxShadow block-background" style={{ height: '67vh' }}>
                        { !groupDisplay ? <GroupBlock
                          stateTeamsInfo={this.props.teamsInfo}
                          openAccordion={this.props.openAccordion}
                        /> : null }
                      </div> : <Tabs
                          closeOrderDetails={this.closeOrderDetails}
                          stateOrderInfo={this.props.orderInfo}
                          stateOrderStatus={this.props.orderInfoStatus} /> }
                    </div>
                  </div>
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

const mapStateToProps = createStructuredSelector({
    orderexpand: selectors.orderExpand(),
    pickupcord: selectors.pickupCord(),
    deliverycord: selectors.deliveryCord(),
    stats: selectors.getStats(),
    searchText: selectors.searchText(),
    addTask: selectors.addTask(),
    auto: selectors.auto(),
    teamsInfo: selectors.mergeTeamsInfo(),
    pilotList: selectors.pilotList(),
    orderList: selectors.orderList(),
    orderInfo: selectors.orderInfo(),
    orderInfoStatus: selectors.orderInfoStatus(),
});

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
    clearForm: () => { dispatch(actions.clearForm()); },
    setSelection: (data) => { dispatch(actions.setSelection(data)); },
    openAccordion: (data) => { dispatch(actions.openAccordion(data)); },
    getTeamCustomers: (data) => { dispatch(actions.getTeamCustomers(data)); },
    getPilot: (team) => { dispatch(actions.getPilot(team)); },
    getOrder: (data) => { dispatch(actions.getOrder(data)); },
    getOrderDetail: (id) => { dispatch(actions.getOrderDetail(id)); },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
