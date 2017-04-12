import _ from 'lodash';
import moment from 'moment';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = {
  orderexpand: false,
  pickupcord: {},
  deliverycord: {},
  orderDisplay: '',
  stats: {
    orderStats: {},
    pilotStats: {},
    error: '',
    request: false,
  },
  searchOrderAttr: '',
  searchPilotAttr: '',
  teamsPanel: {
    teams: [],
    teamSales: {
      sales: {},
      date: '',
    },
    teamCustomers: {
      customers: {},
      date: '',
    },
    error: '',
    request: false,
  },
  addTask: {
    pickup: {
      from_name: '',
      from_phone: '',
      from_email: '',
      from_address: '',
      from_date: '',
    },
    delivery: {
      to_name: '',
      to_phone: '',
      to_email: '',
      to_address: '',
      to_date: '',
    },
    taskInfo:{
    title: '',
    description: '',
    team: '',
    pilots: [],
  },
  request: false,
  addTaskStatus: {
    statusText: 'Sending',
    statusColor: '#6bc9c5',
  },
   selection: {
     teamSelect: '',
     pilots: '',
   },
  },
  auto: 'auto',
  pilotList: {
    pilots: [],
    date: '',
    error: '',
  },
  orderList: {
    orders: [],
    date: '',
    error:'',
  },
  orderDetails: {
    orderId: '',
    orderInfo: {},
    error: '',
    request: false,
  },
  pilotDetails: {
    pilotId: '',
    pilotInfo: {},
    pilotLocation: {
      address: '',
      error: '',
    },
    error: '',
    request: false,
  },
  franchiseList: {
    franchises: [],
    selectedFranchise: 'All',
    error: '',
    request: false,
  },
  orderOptions: {
    reAssign: false,
    edit: false,
    delete: false,
  },
  reOrder: {
    title: '',
    description: '',
    from_name: '',
    from_phone: '',
    from_email: '',
    from_address: '',
    to_name: '',
    to_phone: '',
    to_email: '',
    to_address: '',
    paymentType: 'PREPAID',
    status: 'PENDING',
    to_date_time: '',
    to_location: {
      coordinates: [],
      type: 'Point',
    },
    from_date_time: '',
    from_location: {
      coordinates: [],
      type: 'Point',
    },
    pilot: '',
    team: '',
  },
  reOrderStatus: {
        statusText: 'Sending',
        statusColor: '#6bc9c5',
    },
  reOrderReq: false,
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case 'ORDER_EXPAND':
      return { ...state,
        orderexpand: action.value, };
    case 'ORDER_CLOSE':
      return { ...state,
        orderexpand: action.value, };
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
    case 'ON_SEARCH_ORDER_ATTR':
      return { ...state,
        searchOrderAttr: action.payload,
      };
     case 'ON_SEARCH_PILOT_ATTR':
      return { ...state,
        searchPilotAttr: action.payload,
      };
    case 'GET_TEAMS_SUCCESS':
      return { ...state,
        teamsPanel: {
          ...state.teamsPanel,
          teams: action.payload.map((team) => {
            team.open = false;
            return team;
          }),
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
        teamSales: {
          ...state.teamSales,
          sales: action.payload.response,
          date: action.payload.date,
        },
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
          teamCustomers: {
            ...state.teamCustomers,
            customers: action.payload.response,
            date: action.payload.date,
          },
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
    case 'ADDING_TASK':
    return { ...state,
      addTask: {
        ...state.addTask,
        request: action.payload,
      },
    };
    case 'CLEAR_FORM':
    return { ...state,
      addTask: initialState.addTask,
    };
    case 'SET_SELECTION':
    return { ...state,
      auto: action.payload,
      addTask: {
        ...state.addTask,
        selection: {
          ...state.addTask.selection,
          pilots: '',
        },
      },
    };
    case 'ACCORDION_OPEN':
    return accordionOpen(state, action);
    case 'ADD_TASK_STATUS':
    return {
      ...state,
      addTask: {
        ...state.addTask,
        addTaskStatus: action.payload,
      },
    };
    case 'GET_PILOT_SUCCESS':
      return {
        ...state,
        pilotList: {
          ...state.pilotList,
          pilots: action.payload,
        },
      };
    case 'GET_PILOT_FAILURE':
      return {
        ...state,
        pilotList: {
          ...state.pilotList,
          error: action.payload,
        },
      };
    case 'GET_ORDER_SUCCESS':
      return {
        ...state,
        orderList: {
          ...state.orderList,
          orders: action.payload.response,
          date: action.payload.date,
        },
      };
    case 'GET_ORDER_FAILURE':
      return {
        ...state,
        orderList: {
          ...state.orderList,
          error: action.payload.error,
          date: action.payload.date,
        },
      };
    case 'GET_ORDER_DETAILS':
      return {
        ...state,
        orderDetails: {
          ...state.orderDetails,
          orderId: action.payload,
          },
      };
    case 'GET_ORDER_DETAILS_SUCCESS':
      return {
        ...state,
        orderDetails: {
          ...state.orderDetails,
          orderInfo: action.payload,
        },
      };
    case 'REQUEST_ORDER_DETAILS':
      return {
        ...state,
        orderDetails: {
          ...state.orderDetails,
          request: action.payload,
        },
      };
      case 'CLEAR_ORDER_DETAILS':
        return {
            ...state,
            orderDetails: {
                ...state.orderDetails,
                orderId: initialState.orderDetails.orderId,
                orderInfo: initialState.orderDetails.orderInfo,
            }
        }
      case 'GET_PILOT_DETAILS':
      return {
        ...state,
        pilotDetails: {
          ...state.pilotDetails,
          pilotId: action.payload,
          },
      };
    case 'GET_PILOT_DETAILS_SUCCESS':
      return {
        ...state,
        pilotDetails: {
          ...state.pilotDetails,
          pilotInfo: action.payload,
        },
      };
    case 'REQUEST_PILOT_DETAILS':
      return {
        ...state,
        pilotDetails: {
          ...state.pilotDetails,
          request: action.payload,
        },
      };
      case 'GET_PILOT_LOCATION_SUCCESS':
        return {
            ...state,
            pilotDetails: {
                ...state.pilotDetails,
                pilotLocation: {
                    ...state.pilotDetails.pilotLocation,
                    address: action.payload,
                }
            }
        };
        case 'GET_PILOT_LOCATION_FAILURE':
        return {
            ...state,
            pilotDetails: {
                ...state.pilotDetails,
                pilotLocation: {
                    ...state.pilotDetails.pilotLocation,
                    error: action.payload,
                }
            }
        };
    case 'TEAM_SELECT':
      return {
        ...state,
        addTask: {
          ...state.addTask,
          selection: {
            ...state.addTask.selection,
            teamSelect: action.payload,
          },
        },
      };
    case 'PILOT_SELECT':
      return {
        ...state,
        addTask: {
          ...state.addTask,
          selection: {
            ...state.addTask.selection,
            pilots: action.payload,
          },
        },
      };
    case 'GET_FRANCHISE_LIST_SUCCESS':
      return {
        ...state,
        franchiseList: {
          ...state.franchiseList,
          franchises: action.payload,
        },
      };
    case 'SELECT_FRANCHISE':
      return {
        ...state,
        franchiseList: {
          ...state.franchiseList,
          selectedFranchise: action.payload,
        },
      };
    case 'RE_ORDER':
        return {
            ...state,
            reOrder: action.payload,
        };
    case 'RE_ORDER_CLEAR':
        return {
            ...state,
            reOrder: initialState.reOrder,
        };
    case 'ORDER_ACTION':
        return {
            ...state,
            orderOptions: action.payload,
        };
      case 'UPDATE_ORDER_STATUS':
      return {
          ...state,
          reOrderStatus: action.payload,
      };
      case 'UPDATE_ORDER_REQUEST':
        return {
            ...state,
            reOrderReq: action.payload,
        };
    default:
      return state;
  }
}

function accordionOpen(state, action) {
  const index = _.findIndex(state.teamsPanel.teams, {
    _id: action.payload
  });
  const newState = state.teamsPanel.teams.slice();
  if (state.teamsPanel.teams[index]['open']) {
    newState[index]['open'] = !state.teamsPanel.teams[index]['open'];
  } else {
    newState.forEach((team) => team.open = false);
    newState[index]['open'] = true;
  }
  return {
    ...state,
    teamsPanel: {
      ...state.teamsPanel,
      teams: newState,
    },
  };
}
export default homeReducer;
