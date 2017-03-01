export function changeForm(newFormState) {
  return {
    type: 'CHANGE_FORM',
    newFormState,
  };
}

export function setAuthState(newAuthState) {
  return {
    type: 'SET_AUTH',
    newAuthState,
  };
}

export function sendingRequest(sending) {
  return {
    type: 'SENDING_REQUEST',
    sending,
  };
}

export function loginRequest(data) {
  return {
    type: 'LOGIN_REQUEST',
    data,
  };
}

export function logout() {
  return { type: 'LOGOUT' };
}

export function requestError(error) {
  return {
    type: 'REQUEST_ERROR',
    error,
  };
}

export function cleanError() {
  return {
    type: 'CLEAR_ERROR',
  };
}
