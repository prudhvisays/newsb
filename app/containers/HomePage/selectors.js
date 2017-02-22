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
const teams = () => createSelector(
  teamsPanel(),
  (panel) => panel.teams,
);
const teamSales = () => createSelector(
  teamsPanel(),
  (panel) => panel.teamSales,
);
const teamCustomers = () => createSelector(
  teamsPanel(),
  (panel) => panel.teamCustomers,
);

const mergeTeamsInfo = () => createSelector(
  [teams(),
  teamSales(),
  teamCustomers()],
  (team, sales, customers) => sales,
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
  teams,
  teamSales,
  teamCustomers,
  mergeTeamsInfo,
};
