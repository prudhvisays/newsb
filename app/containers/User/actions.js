export function getUserTeam() {
  return {
    type: 'GET_USER_TEAM',
  };
}

export function getUserTeamSuccess(data) {
  return {
    type: 'GET_USER_TEAM_SUCCESS',
    payload: data,
  };
}

export function getUserTeamFailure(err) {
  return {
    type: 'GET_USER_TEAM_FAILURE',
    payload: err,
  };
}

export function onUserFormChange(data) {
  return {
    type: 'ON_USER_FORM_CHANGE',
    payload: data,
  };
}

export function userCordsChange(data) {
  return {
    type: 'USER_CORDS_CHANGE',
    payload: data,
  };
}

export function userGeoFence(data) {
  return {
    type: 'USER_GEO_FENCE',
    payload: data,
  };
}

export function reqCreateuser(data) {
  return {
    type: 'REQ_CREATE_USER',
    payload: data,
  };
}
export function createUser() {
  return {
    type: 'CREATE_USER',
  };
}

export function createUserSuccess(data) {
  return {
    type: 'CREATE_USER_SUCCESS',
    payload: data,
  };
}

export function createUserFailure(data) {
  return {
    type: 'CREATE_USER_FAILURE',
    payload: data,
  };
}
