const initialState = {
 collapsed: true,
  dateRange:[]
};

function headerReducer(state = initialState, action) {
  switch (action.type) {
    case 'TRIGGER_COLLAPSE':
      return {
        ...state,
        collapsed: !state.collapsed,
      };
    case 'SELECT_DATE_RANGE':
      return {
        ...state,
        dateRange: action.payload
      }
    default:
      return state;
  }
}

export default headerReducer;
