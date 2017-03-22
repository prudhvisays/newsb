import { createSelector } from 'reselect';

const headerState = () => (state) => state.get('header');
const collapsed = () => createSelector(
  headerState(),
  (state) => state.collapsed,
);

export {
  headerState,
  collapsed,
};
