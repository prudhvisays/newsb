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
import auth from '../../Api/Auth';
import { collapsed } from '../AppHeader/selectors';

const socket = io('https://season-boy-api.herokuapp.com').connect();
// const userRole = () => {
//   if(localStorage.getItem('sessionData')['manager']) {
//     return {
//
//     }
//   }
// }
const isAdmin = () => {
  if (auth.loggedIn()) {
    const session = JSON.parse(localStorage.getItem('sessionData'));
    if (session.manager) {
      return true;
    } else {
      return false;
    }
  }
}
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
    this.openDivPilot = this.openDivPilot.bind(this);
    this.orderDetails = this.orderDetails.bind(this);
    this.groupDisplay = this.groupDisplay.bind(this);
    this.addTask = this.addTask.bind(this);
    this.closeOrderDetails = this.closeOrderDetails.bind(this);
    this.closeDivPilot = this.closeDivPilot.bind(this);
    this.getInfo = this.getInfo.bind(this);
  }
  componentDidMount() {
    this.getInfo();
  }
  getInfo() {
    if(isAdmin()) {
      this.props.initialiseData();
    } else {
      this.props.getOrder();
    }
  }
  divTask() {
    this.setState({ compressed: !this.state.compressed });
  }
  openDivPilot() {
    if(!this.state.compressed && !this.state.pilotState) {
      this.setState({ compressed: !this.state.compressed });
      this.setState({ pilotState: !this.state.pilotState });
    }
  }
  closeDivPilot() {
    if(this.state.compressed && this.state.pilotState) {
      this.setState({ compressed: !this.state.compressed });
      this.setState({ pilotState: !this.state.pilotState });
    }
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
    return (
      <section style={{ background: '#eee', color: '#333' }}>
        <div className="ink-grid" style={{ padding: 0, margin: '0 0 0 3.5em' }}>
          <div className="column-group quarter-horizontal-gutters">
            <div className={ isAdmin() ? 'all-75' : 'all-100'}>
              <div className="column-group quarter-horizontal-gutters margin">
                <div className="all-60">
                  <div className="column-group quarter-horizontal-gutters">
                      { isAdmin() && (<Targets
                        stateOrderStats={this.props.orderStats}
                        getFranchiseList={this.props.getFranchiseList}
                        franchiseList={this.props.franchiseList}
                        selectFranchise={this.props.selectFranchise}
                        getInfo={this.getInfo}
                      />)}
                      { isAdmin() && (<Tasks divTask={this.divTask}
                        orderDetails={this.orderDetails}
                        orderBlock={this.props.orderexpand}
                        getStats={this.props.getStats}
                        onSearchOrderAttr={this.props.onSearchOrderAttr}
                        stats={this.props.stats}
                        getTeamCustomers={this.props.getTeamCustomers}
                        closeOrderDetails={this.closeOrderDetails}
                        stateOrders={this.props.orderList}
                        getOrder={this.props.getOrder}
                        getOrderDetail={this.props.getOrderDetail}
                        isAdmin={isAdmin}
                        orderStats={this.props.orderStats}
                        closeOrderExpand={this.props.closeOrderExpand}
                        closePilotExpand={this.props.closePilotExpand}
                        orderId={this.props.orderId}
                        clearOrderDetails={this.props.clearOrderDetails}
                                             {...this.props}
                      />)}
                      <div className={classnames('marginTop', { 'all-100': !compressed, 'all-35': compressed })} style={{ height: '67vh' }}>
                        { !compressed && ( !this.props.collapsed ? (<AddTask
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
                          stateTeamList={this.props.teamsList}
                          statePilots={this.props.pilotListNoFilter}
                          teamSelect={this.props.teamSelect}
                          stateSelectedPilots={this.props.selectedPilots}
                          stateOptedPilot={this.props.optedPilot}
                          pilotSelect={this.props.pilotSelect}
                          isAdmin={isAdmin}
                          />) : (<div style={{ background: '#fff', height: '67vh' }}></div>))}
                      </div>
                    { isAdmin() ? (compressed ? (<div className="all-65 marginTop">
                          { pilotState ? <UserInfo
                        statePilotInfo={this.props.pilotInfo}
                        pilotLocation={this.props.pilotLocation}
                        statePilotStatus={this.props.pilotDetailStatus}
                        closeDivPilot={this.closeDivPilot}
                        getDetailsColToggle={this.props.getDetailsColToggle}
                        detailsColToggle={this.props.detailsColToggle}
                        getPilotReports={this.props.getPilotReports}
                        pilotDateRange={this.props.pilotDateRange}
                        dateRangePilot={this.props.dateRangePilot}
                      /> : null }</div>) : null ) : null}
                  </div>
                </div>
                <div className="all-40">
                  <div className="column-group">
                    <Pilots
                        divPilot={this.openDivPilot}
                        groupDisplay={this.groupDisplay}
                        stats={stats}
                        statePilots={this.props.pilotList}
                        getPilotDetail={this.props.getPilotDetail}
                        closeDivPilot={this.closeDivPilot}
                        closeOrderExpand={this.props.closeOrderExpand}
                        closePilotExpand={this.props.closePilotExpand}
                        onSearchPilotAttr={this.props.onSearchPilotAttr}
                        />
                    { isAdmin() && (<div className="all-100 marginTop" style={{ height: '67vh' }}>
                      {!orderDetails ? <div className="boxShadow block-background" style={{ height: '67vh' }}>
                        { !groupDisplay ? <GroupBlock
                          franchiseMerchants={this.props.franchiseMerchants}
                          openAccordion={this.props.openAccordion}
                          merchantDateRange={this.props.merchantDateRange}
                          dateRangeMerchant={this.props.dateRangeMerchant}
                          getTeamCustomers={this.props.getTeamCustomers}
                          getMerchantReports={this.props.getMerchantReports}
                        /> : null }
                      </div> : <Tabs
                          closeOrderDetails={this.closeOrderDetails}
                          stateOrderInfo={this.props.orderInfo}
                          stateOrderStatus={this.props.orderInfoStatus}
                          re_order={this.props.re_order}
                          reOrder={this.props.reOrder}
                          stateTeamList={this.props.teamsList}
                          reSelectedPilots={this.props.reSelectedPilots}
                          orderOptions={this.props.orderOptions}
                          orderAction={this.props.orderAction}
                          reOrderClear={this.props.reOrderClear}
                          clearOrderDetails={this.props.clearOrderDetails}
                          updateOrder={this.props.updateOrder}
                          reOrderStatus={this.props.reOrderStatus}
                          reOrderRequest={this.props.reOrderRequest}
                          /> }
                    </div>)}
                  </div>
                </div>
              </div>
            </div>
            { isAdmin() && <div className="all-25" style={{ height: '93vh' }}>
              <Map
                  statePilotList={this.props.pilotList}
                  stateOrderList={this.props.orderList}
                  pilotId={this.props.pilotId}
                  pilotsBounds={this.props.pilotsBounds}
              />
            </div> }
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = createStructuredSelector({
    orderexpand: selectors.orderExpand(),
    closeOrderExpand: selectors.closeOrderExpand(),
    closePilotExpand: selectors.closepilotExpand(),
    pickupcord: selectors.pickupCord(),
    deliverycord: selectors.deliveryCord(),
    stats: selectors.getStats(),
    searchOrderAttr: selectors.searchOrderAttr(),
    addTask: selectors.addTask(),
    auto: selectors.auto(),
    franchiseMerchants: selectors.franchiseMerchants(),
    pilotListNoFilter: selectors.pilotListNoFilter(),
    pilotList: selectors.pilotList(),
    orderListNoFilter: selectors.orderListNoFilter(),
    orderList: selectors.orderList(),
    orderInfo: selectors.orderInfo(),
    orderId: selectors.orderId(),
    orderInfoStatus: selectors.orderInfoStatus(),
    teamsList: selectors.getTeams(),
    selectedPilots: selectors.selectedPilots(),
    optedPilot: selectors.optedPilot(),
    pilotId: selectors.pilotId(),
    pilotInfo: selectors.pilotInfo(),
    pilotLocation: selectors.pilotLocation(),
    pilotDetailStatus: selectors.pilotDetailStatus(),
    orderStats: selectors.orderStats(),
    franchiseList: selectors.franchiseList(),
    orderOptions: selectors.orderOptions(),
    re_order: selectors.re_order(),
    reSelectedPilots: selectors.reSelectedPilots(),
    reOrderStatus: selectors.reOrderStatus(),
    reOrderRequest: selectors.reOrderRequest(),
    detailsColToggle: selectors.detailsColToggle(),
    dateRangePilot: selectors.dateRangePilot(),
    dateRangeMerchant: selectors.dateRangeMerchant(),
    pilotsBounds: selectors.pilotsBounds(),
    collapsed: collapsed(),
});

export function mapDispatchToProps(dispatch) {
  return {
    initialiseData: () => { dispatch(actions.initialiseData())},
    orderExpand: (value) => { dispatch(actions.orderExpand(value)); },
    closeOrderDrop: (value) => { dispatch(actions.closeOrderDrop(value)); },
    closePilotDrop: (value) => { dispatch(actions.closePilotDrop(value)); },
    orderClose: (value) => { dispatch(actions.orderClose(value)); },
    pickupCord: (value) => { dispatch(actions.pickupCord(value)); },
    deliveryCord: (value) => { dispatch(actions.deliveryCord(value)); },
    getStats: () => { dispatch(actions.getStats()); },
    onSearchOrderAttr: (searchText) => { dispatch(actions.onSearchOrderAttr(searchText)); },
    onSearchPilotAttr: (searchText) => { dispatch(actions.onSearchPilotAttr(searchText)); },
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
    clearOrderDetails: () => { dispatch(actions.clearOrderDetails()); },
    teamSelect: (id) => { dispatch(actions.teamSelect(id)); },
    pilotSelect: (data) => { dispatch(actions.pilotSelect(data)); },
    getPilotDetail: (id) => { dispatch(actions.getPilotDetail(id)); },
    getFranchiseList: () => { dispatch(actions.getFranchiseList()); },
    selectFranchise: (data) => { dispatch(actions.selectFranchise(data)); },
    orderAction: (data) => { dispatch(actions.orderAction(data)); },
    reOrder: (data) => { dispatch(actions.reOrder(data));},
    reOrderClear: () => { dispatch(actions.reOrderClear());},
    updateOrder: () => { dispatch(actions.updateOrder()); },
    getDetailsColToggle: () => { dispatch(actions.getDetailsColToggle()); },
    getPilotReports: () => { dispatch(actions.getPilotReports()); },
    pilotDateRange: (data) => { dispatch(actions.pilotDateRange(data)); },
    merchantDateRange: (data) => { dispatch(actions.merchantDateRange(data)); },
    getMerchantReports: (data) => { dispatch(actions.getMerchantReports(data)); },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
