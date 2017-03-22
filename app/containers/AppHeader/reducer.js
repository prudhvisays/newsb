const initialState = {
 collapsed: true,
};

function headerReducer(state = initialState, action) {
  switch (action.type) {
    case 'TRIGGER_COLLAPSE':
      return {
        ...state,
        collapsed: !state.collapsed,
      };
    default:
      return state;
  }
}

export default headerReducer;
