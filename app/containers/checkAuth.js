import { store } from '../store';
export default function checkAuth (nextState, replace) {
  // Check if the path isn't dashboard. That way we can apply specific logic to
  // display/render the path we want to
  if (nextState.location.pathname !== '/dashboard') {
    if (!!localStorage.token) {
      if (nextState.location.state && nextState.location.pathname) {
        replace(nextState.location.pathname)
      } else {
        replace('/')
      }
    }
  } else {
    // If the user is already logged in, forward them to the homepage
    if (!localStorage.token) {
      if (nextState.location.state && nextState.location.pathname) {
        replace(nextState.location.pathname)
      } else {
        replace('/dashboard')
      }
    }
  }
}
