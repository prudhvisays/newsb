import { createSelector } from 'reselect';

const userData = () => (state) => state.get('user');
const userTeams = () => createSelector(
  userData(),
  (state) => state.teams
);
const userInfo = () => createSelector(
  userData(),
  (state) => state.userInfo
);

export {
  userData,
  userTeams,
  userInfo,
};
