import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./types";
import api from "./api";
import setAuthorizationHeader from "./setAuthorizationHeader";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.uccAdmin = user.token;
    setAuthorizationHeader(user.token);
    dispatch(userLoggedIn(user));
  });

export const logout = () => dispatch => {
  localStorage.removeItem("uccAdmin");
  setAuthorizationHeader();
  dispatch(userLoggedOut());
};

export const confirm = token => dispatch =>
  api.user.confirm(token).then(user => {
    localStorage.uccAdmin = user.token;
    dispatch(userLoggedIn(user));
  });

export const validateToken = token => () => api.user.validateToken(token);
