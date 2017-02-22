import { createSelector } from 'reselect';
import _ from 'lodash';

const  teamPanel = () => (state) => state.teamsPanel;
const  teams  = () => (state) => state.teamsPanel.teams;
const  sales = () => (state) => state.teamsPanel.teamSales;
const customers = () => (state) => state.teamsPanel.teamCustomers;
const mergeTeamsInfo = () => createSelector(
  [teams, sales, customers],
    (teamFilter, salesFilter, customersFilter) => ({
        teamFilter
  }),
);

export {
  teamPanel,
  teams,
  sales,
  customers,
  mergeTeamsInfo,
};
