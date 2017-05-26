export function initialiseData() {
  return {
    type: 'INITIALISE_DATA'
  }
}

export function orderExpand(value) {
  return {
    type: 'ORDER_EXPAND',
    value,
  };
}

export function closeOrderDrop(value) {
    return {
      type: 'CLOSE_ORDER_DROP',
      payload: value,
    }
}

export function closePilotDrop(value) {
    return {
      type: 'CLOSE_PILOT_DROP',
        payload: value,
    }
}
export function orderClose(value) {
  return {
    type: 'ORDER_CLOSE',
    value,
  };
}

export function pickupCord(value) {
  return {
    type: 'PICKUP_CORD',
    value,
  };
}

export function deliveryCord(value) {
  return {
    type: 'DELIVERY_CORD',
    value,
  };
}

export function getStats() {
  return {
    type: 'GET_STATS',
  };
}

export function statsRequesting(req) {
  return {
    type: 'STATS_REQUEST',
    req,
  };
}
export function getOrderStatsSuccess(data) {
  return {
    type: 'GET_ORDER_STATS_SUCCESS',
    payload: data,
  };
}
export function getPilotStatsSuccess(data) {
  return {
    type: 'GET_PILOT_STATS_SUCCESS',
    payload: data,
  };
}

export function getStatsFailure(err) {
  return {
    type: 'GET_STATS_FAILURE',
    payload: err,
  };
}

export function onSearchOrderAttr(search) {
  return {
    type: 'ON_SEARCH_ORDER_ATTR',
    payload: search,
  };
}

export function onSearchPilotAttr(search) {
  return {
    type: 'ON_SEARCH_PILOT_ATTR',
    payload: search,
  };
}

export function getTeams() {
  return {
    type: 'GET_TEAMS',
  };
}

export function getTeamsSuccess(data) {
  return {
    type: 'GET_TEAMS_SUCCESS',
    payload: data,
  };
}

export function getTeamsFailure(data) {
  return {
    type: 'GET_TEAMS_FAILURE',
    payload: data,
  };
}

export function getTeamSales(data) {
  return {
    type: 'GET_TEAM_SALES',
    payload: data,
  };
}

export function getTeamSalesSuccess(data) {
  return {
    type: 'GET_TEAM_SALES_SUCCESS',
    payload: data,
  };
}
export function getTeamSalesFailure(data) {
  return {
    type: 'GET_TEAM_SALES_FAILURE',
    payload: data,
  };
}

export function getTeamCustomers(data) {
  return {
    type: 'GET_FRANCHISE_CUSTOMERS',
    payload: data,
  };
}

export function getTeamCustomersSuccess(data) {
  return {
    type: 'GET_TEAM_CUSTOMERS_SUCCESS',
    payload: data,
  };
}
export function getTeamCustomersFailure(data) {
  return {
    type: 'GET_TEAM_CUSTOMERS_FAILURE',
    payload: data,
  };
}
export function pickupChange(data) {
  return {
    type: 'PICKUP_CHANGE',
    payload: data,
  };
}
export function deliveryChange(data) {
  return {
    type: 'DELIVERY_CHANGE',
    payload: data,
  };
}

export function addTaskInfo(data) {
  return {
    type: 'ADD_TASK_INFO',
    payload: data,
  };
}

export function addingTask(data) {
  return {
    type: 'ADDING_TASK',
    payload: data,
  };
}
export function postAddTask(data) {
  return {
    type: 'POST_ADD_TASK',
    data,
  };
}

export function postAddTaskSuccess(data) {
  return {
    type: 'POST_ADD_TASK_SUCCESS',
    payload: data,
  };
}

export function postAddTaskFailure(data) {
  return {
    type: 'POST_ADD_TASK_FAILURE',
    payload: data,
  };
}

export function clearForm() {
  return {
    type: 'CLEAR_FORM',
  };
}

export function setSelection(data) {
  return {
    type: 'SET_SELECTION',
    payload: data,
  };
}

export function openAccordion(data) {
  return {
    type: 'ACCORDION_OPEN',
    payload: data,
  };
}

export function addTaskStatus(data) {
  return {
    type: 'ADD_TASK_STATUS',
    payload: data,
  };
}

// GET PILOTS

export function getPilot(data) {
  return {
    type: 'GET_PILOT',
    payload: data,
  };
}

export function getPilotSuccess(data) {
  return {
    type: 'GET_PILOT_SUCCESS',
    payload: data,
  };
}

export function getPilotFailure(data) {
  return {
    type: 'GET_PILOT_FAILURE',
    payload: data,
  };
}

// GET ORDERS

export function getOrder(data) {
  return {
    type: 'GET_ORDER',
    payload: data,
  }
}

export function getOrderSuccess(data) {
  return {
    type: 'GET_ORDER_SUCCESS',
    payload: data,
  };
}

export function getOrderFailure(data) {
  return {
    type: 'GET_ORDER_FAILURE',
    payload: data,
  };
}// GET ORDER DETAILS
export function requestOrderDetail(data) {
  return {
    type: 'REQUEST_ORDER_DETAILS',
    payload: data,
  };
}

export function getOrderDetail(data) {
  return {
    type: 'GET_ORDER_DETAILS',
    payload: data,
  };
}

export function getOrderDetailSuccess(data) {
  return {
    type: 'GET_ORDER_DETAILS_SUCCESS',
    payload: data,
  };
}

export function getOrderDetailFailure(data) {
  return {
    type: 'GET_ORDER_DETAILS_FAILURE',
    payload: data,
  };
}

export function clearOrderDetails() {
    return {
      type: 'CLEAR_ORDER_DETAILS',
    };
}
// GET PILOT DETAILS
export function requestPilotDetail(data) {
  return {
    type: 'REQUEST_PILOT_DETAILS',
    payload: data,
  };
}

export function getPilotDetail(data) {
  return {
    type: 'GET_PILOT_DETAILS',
    payload: data,
  };
}

export function getPilotDetailSuccess(data) {
  return {
    type: 'GET_PILOT_DETAILS_SUCCESS',
    payload: data,
  };
}

export function getPilotDetailFailure(data) {
  return {
    type: 'GET_PILOT_DETAILS_FAILURE',
    payload: data,
  };
}
// FETCH PILOT LOCATION

export function getPilotLocationSuccess(data) {
  return {
    type: 'GET_PILOT_LOCATION_SUCCESS',
    payload: data,
  }
}

export function getPilotLocationFailure(data) {
    return {
      type: 'GET_PILOT_LOCATION_FAILURE',
      payload: data,
    }
}
// ADD TASK TEAM SELECTION
export function teamSelect(id) {
  return {
    type: 'TEAM_SELECT',
    payload: id,
  };
}
export function pilotSelect(data) {
  return {
    type: 'PILOT_SELECT',
    payload: data,
  };
}

// GET FRANCHISE LIST
export function getFranchiseList() {
  return {
    type: 'GET_FRANCHISE_LIST',
  };
}

export function getFranchiseListSuccess(data) {
  return {
    type: 'GET_FRANCHISE_LIST_SUCCESS',
    payload: data,
  };
}

export function getFranchiseListFailure(err) {
  return {
    type: 'GET_FRANCHISE_LIST_FAILURE',
    payload: err,
  };
}

export function selectFranchise(data) {
  return {
    type: 'SELECT_FRANCHISE',
    payload: data,
  };
}

// ORDER ACTIONS

export function orderAction(data) {
    return {
      type: 'ORDER_ACTION',
      payload: data,
    };
}

export function reOrder(data) {
    return {
      type: 'RE_ORDER',
      payload: data,
    }
}

export function reOrderClear() {
    return {
      type: 'RE_ORDER_CLEAR',
    }
}

// UPDATE ORDER
export function updateOrderStatus(data) {
    return {
      type: 'UPDATE_ORDER_STATUS',
      payload: data,
    }
}
export function updateOrderReq(data) {
    return {
      type: 'UPDATE_ORDER_REQUEST',
      payload: data,
    }
}
export function updateOrder() {
    return {
      type: 'UPDATE_ORDER',
    }
}

export function updateOrderSuccess(data) {
  return {
    type: 'UPDATE_ORDER_SUCCESS',
    payload: data,
  }
}

export function updateOrderFailure(data) {
    return {
      type: 'UPDATE_ORDER_FAILURE',
      payload: data,
    }
}

// USER ACTIONS
export function getDetailsColToggle() {
  return {
    type: 'GET_DETAILS_COL_TOGGLE',
  }
}

// GET PILOT REPORTS

export function getPilotReports() {
  return {
    type: 'GET_PILOT_REPORTS',
  }
}

export function pilotDateRange(data) {
  return {
    type: 'PILOT_DATE_RANGE',
    payload: data
  }
}

export function getPilotReportSuccess(data) {
  return {
    type: 'GET_PILOT_REPORTS_SUCCESS',
    payload: data
  }
}

// GET MERCHANT REPORTS
export function getMerchantReports(data) {
  return {
    type: 'GET_MERCHANT_REPORTS',
    payload: data
  }
}

export function merchantDateRange(data) {
  return {
    type: 'MERCHANT_DATE_RANGE',
    payload: data
  }
}

export function getMerchantReportSuccess(data) {
  return {
    type: 'GET_MERCHANT_REPORTS_SUCCESS',
    payload: data
  }
}
