import { createSelector } from 'reselect';
import _ from 'lodash';

const homeData = () => (state) => state.get('home');
const orderExpand = () => createSelector(
  homeData(),
    (homeState) => homeState.orderexpand,
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
const searchText = () => createSelector(
  homeData(),
    (homeState) => homeState.searchText,
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
const teamSales = () => createSelector(
  teamsPanel(),
  (panel) => panel.teamSales.sales,
);
const teamCustomers = () => createSelector(
  teamsPanel(),
  (panel) => panel.teamCustomers.customers,
);

const mergeTeamSales = () => createSelector(
  [getTeams(),
    teamSales(),
  ],
  (teams, sales) => _.map(teams,(team) => {
    return _.merge(team, _.find(sales, { _id: team._id}))
  })
);

const mergeTeamsInfo = () => createSelector(
    [mergeTeamSales(),
      teamCustomers()],
      (sales, customers) => _.map(sales, (sale) => {
        return _.merge(sale, _.find(customers, { _id: sale['_id'] }))
      })
    );

const pilotList = () => createSelector(
  homeData(),
  (state) => state.pilotList.pilots,
);

const orderList = () => createSelector(
  homeData(),
  (state) => state.orderList.orders,
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
    pilotList(),
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

const pilotDetailStatus = () => createSelector(
  pilotDetails(),
  (pilot) => pilot.request,
);

export {
  homeData,
  orderExpand,
  pickupCord,
  deliveryCord,
  getStats,
  searchText,
  addTask,
  auto,
  teamsPanel,
  getTeams,
  teamSales,
  teamCustomers,
  mergeTeamSales,
  mergeTeamsInfo,
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
  pilotDetailStatus,
};
