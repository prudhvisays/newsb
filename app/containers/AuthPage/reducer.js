import auth from '../../Api/Auth';

const initialState = {
  formState: {
    username: '',
    password: '',
  },
  error: '',
  currentlySending: false,
  loggedIn: auth.loggedIn(),
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_FORM':
      return {
        ...state,
        formState: action.newFormState,
      };
    case 'SET_AUTH':
      return {
        ...state,
        loggedIn: action.newAuthState,
      };
    case 'SENDING_REQUEST':
      return {
        ...state,
        currentlySending: action.sending,
      };
    case 'REQUEST_ERROR':
      return {
        ...state,
        error: action.error,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
}

export default authReducer;
