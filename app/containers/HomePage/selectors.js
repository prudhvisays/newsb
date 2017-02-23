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
  (panel) => panel.teamSales,
);
const teamCustomers = () => createSelector(
  teamsPanel(),
  (panel) => panel.teamCustomers,
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
        return _.merge(sale, _.find(customers, { _id: sale._id}))
      })
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
};
