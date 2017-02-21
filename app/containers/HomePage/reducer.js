const initialState = {
  orderexpand: false,
  pickupcord: {},
  deliverycord: {},
  stats: {
    orderStats: {},
    pilotStats: {},
    error: '',
    request: false,
  },
  searchText: '',
  teamsPanel: {
    teams: {},
    teamSales: {},
    teamCustomers: {},
    error: '',
    request: false,
  },
  addTask: {
    pickup: {
      from_name: '',
      from_phone: '',
      from_email: '',
      from_address: '',
    },
    delivery: {
      to_name: '',
      to_phone: '',
      to_email: '',
      to_address: '',
    },
    taskInfo:{
    title: '',
    description: '',
    team: '',
    pilots: [],
  },
  },
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case 'ORDER_EXPAND':
      return { ...state,
        orderexpand: action.value };
    case 'ORDER_CLOSE':
      return { ...state,
        orderexpand: action.value };
    case 'PICKUP_CORD':
      return { ...state,
        pickupcord: action.value };
    case 'DELIVERY_CORD':
      return { ...state,
        deliverycord: action.value };
    case 'GET_ORDER_STATS_SUCCESS':
      return { ...state,
        stats: {
          ...state.stats,
          orderStats: action.payload,
        } };
    case 'GET_PILOT_STATS_SUCCESS':
      return { ...state,
        stats: {
          ...state.stats,
          pilotStats: action.payload,
        } };
    case 'GET_STATS_FAILURE':
      return { ...state,
        stats: {
          ...state.stats,
          error: action.payload,
        } };
    case 'STATS_REQUEST':
      return { ...state,
        stats: {
          ...state.stats,
          request: action.req,
        } };
    case 'ON_SEARCH':
      return { ...state,
        searchText: action.payload,
      };
    case 'GET_TEAMS_SUCCESS':
      return { ...state,
        teamsPanel: {
          ...state.teamsPanel,
          teams: action.payload,
        },
      };
    case 'GET_TEAMS_FAILURE':
      return { ...state,
        teamsPanel: {
          ...state.teamsPanel,
          error: action.payload,
        },
      };
    case 'GET_TEAM_SALES_SUCCESS':
      return { ...state,
      teamsPanel: {
        ...state.teamsPanel,
        teamSales: action.payload,
      },
    }
    case 'GET_TEAM_SALES_FAILURE':
      return { ...state,
      teamsPanel: {
        ...state.teamsPanel,
        error: action.payload,
      },
    }
    case 'GET_TEAM_CUSTOMERS_SUCCESS':
        return { ...state,
        teamsPanel: {
          ...state.teamsPanel,
          teamCustomers: action.payload,
        },
      };
    case 'GET_TEAM_CUSTOMERS_FAILURE':
      return { ...state,
        teamsPanel: {
          ...state.teamsPanel,
          error: action.payload,
        },
      };
    case 'PICKUP_CHANGE':
      return { ...state,
        addTask: {
          ...state.addTask,
          pickup: action.payload,
        },
      };
    case 'DELIVERY_CHANGE':
      return { ...state,
      addTask: {
        ...state.addTask,
        delivery: action.payload,
      },
    };
    case 'ADD_TASK_INFO':
    return { ...state,
      addTask: {
        ...state.addTask,
        taskInfo: action.payload,
      },
    };
    default:
      return state;
  }
}

export default homeReducer;
