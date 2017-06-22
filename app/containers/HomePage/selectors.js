import { createSelector } from 'reselect';
import _ from 'lodash';

const homeData = () => (state) => state.get('home');
const orderExpand = () => createSelector(
  homeData(),
    (homeState) => homeState.orderexpand,
);

const closeOrderExpand = () => createSelector(
  homeData(),
    (homeState) => homeState.closeOrderDrop,
);
const closepilotExpand = () => createSelector(
  homeData(),
    (homeState) => homeState.closePilotDrop,
);

const pickupCord = () => createSelector(
  homeData(),
    (homeState) => homeState.pickupcord,
);
const deliveryCord = () => createSelector(
  homeData(),
    (homeState) => homeState.deliverycord,
);
const getStats = () => createSelector(
  homeData(),
    (homeState) => homeState.stats,
);
const addTask = () => createSelector(
  homeData(),
    (homeState) => homeState.addTask,
);
const auto = () => createSelector(
  homeData(),
  (homeState) => homeState.auto,
);
const teamsPanel = () => createSelector(
  homeData(),
  (homeState) => homeState.teamsPanel,
);

const getTeams = () => createSelector(
  teamsPanel(),
  (panel) => panel.teams,
);
// const teamSales = () => createSelector(
//   teamsPanel(),
//   (panel) => panel.teamSales.sales,
// );
const franchiseMerchants = () => createSelector(
  teamsPanel(),
  (panel) => panel.teamCustomers.customers,
);

// const mergeTeamSales = () => createSelector(
//   [getTeams(),
//     teamSales(),
//   ],
//   (teams, sales) => _.map(teams,(team) => {
//     return _.merge(team, _.find(sales, { _id: team._id}))
//   })
// );
//
// const mergeTeamsInfo = () => createSelector(
//     [mergeTeamSales(),
//       teamCustomers()],
//       (sales, customers) => _.map(sales, (sale) => {
//         return _.merge(sale, _.find(customers, { _id: sale['_id'] }))
//       })
//     );

const searchPilotAttr = () => createSelector(
    homeData(),
    (state) => state.searchPilotAttr
);

const pilotListNoFilter = () => createSelector(
  homeData(),
  (state) => state.pilotList.pilots,
);

const pilotList = () => createSelector(
  [pilotListNoFilter(),
   searchPilotAttr()],
  (state, searchText) => state.filter((pilot) => {
      const regex = new RegExp(searchText, 'gi');
      if(searchText) {
          return String(pilot.id).match(regex) ||
                 String(pilot.user.firstName).match(regex) ||
                 String(pilot.user.mobileNumber).match(regex);
      } else {
          return state;
      }
  }),
);

const pilotsBounds = () => createSelector(
  pilotList(),
  (state) => state.map((pilot) => pilot.location.coordinates.slice().reverse()
 )
)

const searchOrderAttr = () => createSelector(
    homeData(),
    (homeState) => homeState.searchOrderAttr,
);

const fromDate = () => createSelector(
  homeData(),
  (state) => state.fromDate
);

const toDate = () => createSelector(
  homeData(),
  (state) => state.toDate
);

const orderListNoFilter = () => createSelector(
  homeData(),
  (state) => state.orderList.orders,
);

const orderList = () => createSelector(
  [orderListNoFilter(),
    searchOrderAttr()],
  (state, searchText) => state.filter((order) => {
      const regex = new RegExp(searchText, 'gi');
      if(searchText) {
          return String(order.id).match(regex) ||
              String(order.status).match(regex) ||
              String(order.to_name).match(regex) ||
              String(order.to_phone).match(regex) ||
              String(order.pilot && order.pilot.user.mobileNumber).match(regex) ||
              String(order.pilot && order.pilot.user.firstName).match(regex);
      } else {
          return state;
      }
  }),
);

const statsLength = (lists, values, shouldNotMatch = false) => {
    if(lists.length > 0) {
        return lists.filter((list) => {
            if (shouldNotMatch) {
                return values.indexOf(list.status) < 0
            }
            return values.indexOf(list.status) > -1
        }).length
    }
    return 0;
}
const orderStats = () => createSelector(
    orderListNoFilter(),
    (oList) => {
        return {
            assigned: statsLength(oList, ['COMPLETED', 'PENDING', 'FAILED'], true),
            unassigned: statsLength(oList, ['PENDING']),
            completed: statsLength(oList, ['COMPLETED', 'FAILED']),
        }
    }
);

const orderId = () => createSelector(
  homeData(),
  (state) => state.orderDetails.orderId,
);

const orderInfo = () => createSelector(
  homeData(),
  (state) => state.orderDetails.orderInfo,
);
const orderInfoStatus = () => createSelector(
  homeData(),
  (state) => state.orderDetails.request,
);

const selectedTeam = () => createSelector(
  addTask(),
  (addtask) => addtask.selection.teamSelect,
);

const selectedPilots = () => createSelector(
  [
    selectedTeam(),
    pilotListNoFilter(),
  ],
  (teamId, pilots) => _.filter(pilots, (pilot) => {
    let pilotId = ''
    pilot.teams.map((pilotid) => pilotId = pilotid)
    return teamId === pilotId
  }),
);

const optedPilot = () => createSelector(
  addTask(),
  (task) => task.selection.pilots,
)

const pilotDetails = () => createSelector(
  homeData(),
  (state) => state.pilotDetails,
)
const pilotId = () => createSelector(
  pilotDetails(),
  (pilot) => pilot.pilotId,
);

const pilotInfo = () => createSelector(
  pilotId(),
  pilotDetails(),
  (id, pilot) => pilot.pilotInfo,
);
const pilotLocation = () => createSelector(
    pilotDetails(),
    (state) => state.pilotLocation,
);

const pilotDetailStatus = () => createSelector(
  pilotDetails(),
  (pilot) => pilot.request,
);

const franchiseList = () => createSelector(
  homeData(),
  (state) => state.franchiseList,
);

const orderOptions = () => createSelector(
   homeData(),
    (state) => state.orderOptions,
);

const re_order = () => createSelector(
    homeData(),
    (state) => state.reOrder,
);

const reSelectedTeam = () => createSelector(
    homeData(),
    (state) => state.reOrder.team,
);

const reSelectedPilots = () => createSelector(
    [
        reSelectedTeam(),
        pilotList(),
    ],
    (teamId, pilots) => _.filter(pilots, (pilot) => {
        let pilotId = ''
        pilot.teams.map((pilotid) => pilotId = pilotid)
        if(teamId !== undefined) {
            return teamId === pilotId
        } else {
            return pilot.teams.length === 0;
        }
    }),
);

const reOrderStatus = () => createSelector(
    homeData(),
    (state) => state.reOrderStatus,
);

const reOrderRequest = () => createSelector(
    homeData(),
    (state) => state.reOrderReq,
);

const  detailsColToggle = () => createSelector(
  homeData(),
  (state) => state.userActions.getDetailsColumn,
);

const dateRangePilot = () => createSelector(
  pilotDetails(),
  (state) => state.dateRange
);

const dateRangeMerchant = () => createSelector(
  teamsPanel(),
  (state) => state.dateRange
)

const merchantID = () => createSelector(
  teamsPanel(),
  (state) => state.merchantId
)

const pilotLogoutStatus = () => createSelector(
  homeData(),
  (state) => state.pilotLogoutStatus
)

export {
  homeData,
  orderExpand,
  closeOrderExpand,
  closepilotExpand,
  pickupCord,
  deliveryCord,
  getStats,
  searchOrderAttr,
  addTask,
  auto,
  teamsPanel,
  getTeams,
  franchiseMerchants,
  pilotListNoFilter,
  orderListNoFilter,
  pilotList,
  orderList,
  orderId,
  orderInfo,
  orderInfoStatus,
  selectedTeam,
  selectedPilots,
  optedPilot,
  pilotId,
  pilotDetails,
  pilotInfo,
  pilotLocation,
  pilotDetailStatus,
  orderStats,
  franchiseList,
  orderOptions,
  re_order,
  reSelectedTeam,
  reSelectedPilots,
  reOrderStatus,
  reOrderRequest,
  detailsColToggle,
  dateRangePilot,
  dateRangeMerchant,
  merchantID,
  pilotsBounds,
  pilotLogoutStatus,
  fromDate,
  toDate
};
