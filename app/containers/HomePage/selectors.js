import { createSelector } from 'reselect';
import _ from 'lodash';

const  teamsPanel = () => (state) => state.teamsPanel;
const  { teams } = () => (state) => state.teamsPanel;
const 
const mergeTeamsInfo = () => createSelector(
  orderData(),
    (ordersData) => {
      _.filter(ordersData, (data) => data.status === 'ASSIGNED');
    },
);

export {
  homeState,
  orderData,
  getAssignedData,
  ordExpand,
  delCord,
  pickCord,
};
