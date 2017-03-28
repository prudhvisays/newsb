import { createSelector } from 'reselect';

const userData = () => (state) => state.get('user');
const userTeams = () => createSelector(
  userData(),
  (state) => state.teams
);

const franchisesList = () => createSelector(
  userData(),
  (state) => state.franchises
);
const userInfo = () => createSelector(
  userData(),
  (state) => state.userInfo
);

const userRequest = () => createSelector (
  userData(),
  (state) => state.request
)
const userStatus = () => createSelector (
  userData(),
  (state) => state.createUserStatus
)
export {
  userData,
  userTeams,
  franchisesList,
  userInfo,
  userRequest,
  userStatus,
};
